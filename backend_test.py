import requests
import sys
from datetime import datetime

class OpticalStoreAPITester:
    def __init__(self, base_url="https://glass-morphic-3.preview.emergentagent.com"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0

    def run_test(self, name, method, endpoint, expected_status, expected_data_checks=None):
        """Run a single API test"""
        url = f"{self.base_url}/{endpoint}"
        headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"   URL: {url}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, timeout=10)
            elif method == 'POST':
                response = requests.post(url, headers=headers, timeout=10)

            print(f"   Status Code: {response.status_code}")
            
            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                
                # Additional data validation if provided
                if expected_data_checks:
                    try:
                        data = response.json()
                        for check_name, check_func in expected_data_checks.items():
                            if check_func(data):
                                print(f"   ✅ {check_name}: Passed")
                            else:
                                print(f"   ❌ {check_name}: Failed")
                                success = False
                    except Exception as e:
                        print(f"   ❌ Data validation error: {str(e)}")
                        success = False
                        
                return success, response.json() if response.content else {}
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                try:
                    error_data = response.json()
                    print(f"   Error response: {error_data}")
                except:
                    print(f"   Error response: {response.text}")
                return False, {}

        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            return False, {}

    def test_api_root(self):
        """Test API root endpoint"""
        return self.run_test(
            "API Root",
            "GET",
            "api/",
            200,
            {"has_message": lambda data: "message" in data}
        )

    def test_categories_endpoint(self):
        """Test categories endpoint"""
        return self.run_test(
            "Categories Endpoint",
            "GET",
            "api/categories",
            200,
            {
                "is_list": lambda data: isinstance(data, list),
                "has_6_categories": lambda data: len(data) == 6,
                "has_required_fields": lambda data: all(
                    all(field in cat for field in ['id', 'name', 'slug', 'description', 'image', 'frame_count'])
                    for cat in data
                ),
                "has_sunglasses": lambda data: any(cat['slug'] == 'sunglasses' for cat in data),
                "has_reading": lambda data: any(cat['slug'] == 'reading' for cat in data),
                "frame_counts_valid": lambda data: all(cat['frame_count'] >= 0 for cat in data)
            }
        )

    def test_sunglasses_frames(self):
        """Test sunglasses frames endpoint"""
        return self.run_test(
            "Sunglasses Frames",
            "GET",
            "api/frames/category/sunglasses",
            200,
            {
                "has_category": lambda data: "category" in data,
                "has_frames": lambda data: "frames" in data,
                "frames_is_list": lambda data: isinstance(data.get("frames", []), list),
                "has_5_frames": lambda data: len(data.get("frames", [])) == 5,
                "frames_have_required_fields": lambda data: all(
                    all(field in frame for field in ['id', 'name', 'brand', 'price', 'category_slug', 'image', 'description', 'features'])
                    for frame in data.get("frames", [])
                )
            }
        )

    def test_reading_frames(self):
        """Test reading frames endpoint"""
        return self.run_test(
            "Reading Frames",
            "GET",
            "api/frames/category/reading",
            200,
            {
                "has_category": lambda data: "category" in data,
                "has_frames": lambda data: "frames" in data,
                "frames_is_list": lambda data: isinstance(data.get("frames", []), list),
                "has_4_frames": lambda data: len(data.get("frames", [])) == 4,
                "frames_have_required_fields": lambda data: all(
                    all(field in frame for field in ['id', 'name', 'brand', 'price', 'category_slug', 'image', 'description', 'features'])
                    for frame in data.get("frames", [])
                )
            }
        )

    def test_all_category_frames(self):
        """Test all category frame endpoints"""
        categories = ['sunglasses', 'reading', 'computer', 'sports', 'kids', 'contacts']
        all_passed = True
        
        for category in categories:
            success, data = self.run_test(
                f"{category.title()} Category Frames",
                "GET",
                f"api/frames/category/{category}",
                200,
                {
                    "has_category": lambda data: "category" in data,
                    "has_frames": lambda data: "frames" in data,
                    "category_slug_matches": lambda data: data.get("category", {}).get("slug") == category
                }
            )
            if not success:
                all_passed = False
                
        return all_passed

    def test_invalid_category(self):
        """Test invalid category endpoint"""
        return self.run_test(
            "Invalid Category",
            "GET",
            "api/frames/category/invalid-category",
            200,  # Should return 200 with empty frames
            {
                "has_empty_frames": lambda data: len(data.get("frames", [])) == 0,
                "category_is_none": lambda data: data.get("category") is None
            }
        )

def main():
    print("🚀 Starting Vidisha Opticals API Testing...")
    print("=" * 60)
    
    # Setup
    tester = OpticalStoreAPITester()
    
    # Run tests
    print("\n📋 Running Backend API Tests...")
    
    # Test API root
    tester.test_api_root()
    
    # Test categories
    tester.test_categories_endpoint()
    
    # Test specific category frames
    tester.test_sunglasses_frames()
    tester.test_reading_frames()
    
    # Test all categories
    tester.test_all_category_frames()
    
    # Test error handling
    tester.test_invalid_category()
    
    # Print results
    print("\n" + "=" * 60)
    print(f"📊 Backend API Test Results:")
    print(f"   Tests Run: {tester.tests_run}")
    print(f"   Tests Passed: {tester.tests_passed}")
    print(f"   Success Rate: {(tester.tests_passed/tester.tests_run*100):.1f}%")
    
    if tester.tests_passed == tester.tests_run:
        print("🎉 All backend API tests passed!")
        return 0
    else:
        print(f"❌ {tester.tests_run - tester.tests_passed} tests failed")
        return 1

if __name__ == "__main__":
    sys.exit(main())