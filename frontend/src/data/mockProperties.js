// Rich mock properties for StaySphere discovery, 360 tour, and bed booking
export const MOCK_PROPERTIES = [
  {
    "_id": "prop-101",
    "id": "prop-101",
    "title": "UrbanNest Premier Student Living",
    "tagline": "Luxury student PG with high-speed WiFi, AC, and daily nutritious meals",
    "description": "Located just 400 meters from top universities and tech parks, UrbanNest Premier provides fully furnished air-conditioned rooms, dedicated study desks, high-speed fiber internet, and 3-course homestyle meals. Features an interactive 360-degree virtual tour so you can explore your exact room before visiting.",
    "propertyType": "PG",
    "genderPreference": "Unisex",
    "address": {
      "street": "14th Cross, Koramangala 4th Block",
      "city": "Bangalore",
      "state": "Karnataka",
      "pincode": "560034",
      "landmark": "Near Christ University & Forum Mall",
      "coordinates": {
        "lat": 12.9352,
        "lng": 77.6245
      }
    },
    "pricing": {
      "startingPrice": 8500,
      "securityDeposit": 10000,
      "maintenanceFee": 1200,
      "electricityRule": "₹9/unit as per sub-meter",
      "noticePeriodDays": 30
    },
    "images": [
      "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&w=1000&q=80"
    ],
    "gallery": [
      {
        "url": "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1000&q=80",
        "category": "bedroom",
        "caption": "UrbanNest Premier Student Living - Primary Bedroom"
      },
      {
        "url": "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1000&q=80",
        "category": "living",
        "caption": "UrbanNest Premier Student Living - Common Lounge & Living"
      },
      {
        "url": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80",
        "category": "washroom",
        "caption": "UrbanNest Premier Student Living - Attached Sanitized Washroom"
      },
      {
        "url": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1000&q=80",
        "category": "balcony",
        "caption": "UrbanNest Premier Student Living - Airy Balcony & View"
      },
      {
        "url": "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80",
        "category": "kitchen",
        "caption": "UrbanNest Premier Student Living - Modular Kitchen & Dining"
      },
      {
        "url": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1000&q=80",
        "category": "exterior",
        "caption": "UrbanNest Premier Student Living - Secured Building Elevation"
      },
      {
        "url": "https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&w=1000&q=80",
        "category": "bedroom",
        "caption": "UrbanNest Premier Student Living - Study Station & Wardrobe"
      }
    ],
    "virtualTour": {
      "type": "equirectangular",
      "panoramaUrl": "/panoramas/deluxe-bedroom.jpg",
      "previewUrl": "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1000&q=80",
      "scenes": [
        {
          "id": "bedroom",
          "title": "Deluxe Twin Study Bedroom",
          "panoramaUrl": "/panoramas/deluxe-bedroom.jpg",
          "initialPitch": -2,
          "initialYaw": 110,
          "hotSpots": [
            {
              "pitch": -10,
              "yaw": 115,
              "type": "info",
              "text": "Dedicated Study Desk & High-speed Fiber"
            },
            {
              "pitch": 0,
              "yaw": 210,
              "type": "scene",
              "text": "Step out to Balcony",
              "sceneId": "balcony"
            },
            {
              "pitch": 2,
              "yaw": -40,
              "type": "scene",
              "text": "Walk to Common Lounge",
              "sceneId": "lounge"
            }
          ]
        },
        {
          "id": "balcony",
          "title": "Private Balcony Outlook",
          "panoramaUrl": "/panoramas/balcony-view.jpg",
          "initialPitch": 0,
          "initialYaw": 45,
          "hotSpots": [
            {
              "pitch": 0,
              "yaw": 180,
              "type": "scene",
              "text": "Return to Bedroom",
              "sceneId": "bedroom"
            }
          ]
        },
        {
          "id": "lounge",
          "title": "Resident Common Lounge",
          "panoramaUrl": "/panoramas/living-lounge.jpg",
          "initialPitch": 0,
          "initialYaw": 0,
          "hotSpots": [
            {
              "pitch": -5,
              "yaw": 45,
              "type": "info",
              "text": "Community TV & Coworking Area"
            },
            {
              "pitch": 0,
              "yaw": 180,
              "type": "scene",
              "text": "Go to Bedroom",
              "sceneId": "bedroom"
            }
          ]
        }
      ]
    },
    "amenities": [
      "High-Speed WiFi",
      "Air Conditioning",
      "Attached Washroom",
      "Power Backup",
      "Daily Housekeeping",
      "Washing Machine",
      "RO Drinking Water",
      "24/7 CCTV & Security",
      "Gym Access",
      "Biometric Access"
    ],
    "houseRules": [
      "Main entry gate closes at 11:00 PM",
      "Visitors allowed in lounge until 8:00 PM",
      "Non-smoking & quiet study hours 10 PM - 7 AM"
    ],
    "foodIncluded": true,
    "foodPlans": [
      {
        "id": "none",
        "name": "No Food",
        "price": 0,
        "description": "Self-cooking in shared pantry"
      },
      {
        "id": "two_meals",
        "name": "2 Meals (Breakfast + Dinner)",
        "price": 2500,
        "description": "Nutritious home-cooked morning and night meals"
      },
      {
        "id": "three_meals",
        "name": "3 Meals (Breakfast + Lunch + Dinner)",
        "price": 3800,
        "description": "Full 7-day buffet plan with weekend specials"
      }
    ],
    "rating": 4.8,
    "reviewCount": 42,
    "owner": {
      "name": "Vikram Malhotra",
      "phone": "+91 91234 56789",
      "email": "owner@staysphere.com",
      "verified": true
    },
    "rooms": [
      {
        "roomId": "room-101",
        "roomNumber": "101",
        "sharingType": "Double",
        "floor": 1,
        "rentPerBed": 9500,
        "hasBalcony": true,
        "hasAttachedBathroom": true,
        "beds": [
          {
            "bedId": "bed-101-A",
            "bedNumber": "Bed A (Window Side)",
            "isOccupied": false,
            "tenant": null
          },
          {
            "bedId": "bed-101-B",
            "bedNumber": "Bed B",
            "isOccupied": true,
            "tenant": {
              "name": "Rohan V.",
              "college": "Christ Univ"
            }
          }
        ]
      },
      {
        "roomId": "room-102",
        "roomNumber": "102",
        "sharingType": "Single",
        "floor": 1,
        "rentPerBed": 14500,
        "hasBalcony": true,
        "hasAttachedBathroom": true,
        "beds": [
          {
            "bedId": "bed-102-A",
            "bedNumber": "Private Single Bed",
            "isOccupied": false,
            "tenant": null
          }
        ]
      },
      {
        "roomId": "room-201",
        "roomNumber": "201",
        "sharingType": "Triple",
        "floor": 2,
        "rentPerBed": 7500,
        "hasBalcony": false,
        "hasAttachedBathroom": true,
        "beds": [
          {
            "bedId": "bed-201-A",
            "bedNumber": "Bed 1 (Study Desk Corner)",
            "isOccupied": false,
            "tenant": null
          },
          {
            "bedId": "bed-201-B",
            "bedNumber": "Bed 2 (Center)",
            "isOccupied": false,
            "tenant": null
          },
          {
            "bedId": "bed-201-C",
            "bedNumber": "Bed 3",
            "isOccupied": true,
            "tenant": {
              "name": "Aditya S.",
              "college": "DTU"
            }
          }
        ]
      }
    ]
  },
  {
    "_id": "prop-102",
    "id": "prop-102",
    "title": "ScholarHaven Luxury Girls Residency",
    "tagline": "Safe, secure, and vibrant girls PG near North Campus with 3-tier security",
    "description": "ScholarHaven is exclusively crafted for female students and young professionals seeking premium comfort, tight 24/7 security with biometric access, warden supervision, and quiet study zones.",
    "propertyType": "PG",
    "genderPreference": "Girls",
    "address": {
      "street": "Hudson Lane, Vijay Nagar",
      "city": "Delhi",
      "state": "Delhi NCR",
      "pincode": "110009",
      "landmark": "Near GTB Nagar Metro & North Campus DU",
      "coordinates": {
        "lat": 28.6942,
        "lng": 77.2062
      }
    },
    "pricing": {
      "startingPrice": 9000,
      "securityDeposit": 9000,
      "maintenanceFee": 1000,
      "electricityRule": "Metered as per actual consumption",
      "noticePeriodDays": 30
    },
    "images": [
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1540518614846-7ede433c4b13?auto=format&fit=crop&w=1000&q=80"
    ],
    "gallery": [
      {
        "url": "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1000&q=80",
        "category": "bedroom",
        "caption": "ScholarHaven Luxury Girls Residency - Primary Bedroom"
      },
      {
        "url": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1000&q=80",
        "category": "living",
        "caption": "ScholarHaven Luxury Girls Residency - Common Lounge & Living"
      },
      {
        "url": "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1000&q=80",
        "category": "washroom",
        "caption": "ScholarHaven Luxury Girls Residency - Attached Sanitized Washroom"
      },
      {
        "url": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80",
        "category": "balcony",
        "caption": "ScholarHaven Luxury Girls Residency - Airy Balcony & View"
      },
      {
        "url": "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1000&q=80",
        "category": "kitchen",
        "caption": "ScholarHaven Luxury Girls Residency - Modular Kitchen & Dining"
      },
      {
        "url": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80",
        "category": "exterior",
        "caption": "ScholarHaven Luxury Girls Residency - Secured Building Elevation"
      },
      {
        "url": "https://images.unsplash.com/photo-1540518614846-7ede433c4b13?auto=format&fit=crop&w=1000&q=80",
        "category": "bedroom",
        "caption": "ScholarHaven Luxury Girls Residency - Study Station & Wardrobe"
      }
    ],
    "virtualTour": {
      "type": "equirectangular",
      "panoramaUrl": "/panoramas/master-bedroom.jpg",
      "previewUrl": "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1000&q=80",
      "scenes": [
        {
          "id": "bedroom",
          "title": "Master Academic Study Suite",
          "panoramaUrl": "/panoramas/master-bedroom.jpg",
          "initialPitch": -2,
          "initialYaw": 80,
          "hotSpots": [
            {
              "pitch": -8,
              "yaw": 85,
              "type": "info",
              "text": "Ergonomic Desk & Bookshelf"
            },
            {
              "pitch": 0,
              "yaw": 180,
              "type": "scene",
              "text": "Go to Study Library",
              "sceneId": "study"
            }
          ]
        },
        {
          "id": "study",
          "title": "Quiet Study Hall & Library",
          "panoramaUrl": "/panoramas/study-hall.jpg",
          "initialPitch": 0,
          "initialYaw": 120,
          "hotSpots": [
            {
              "pitch": -5,
              "yaw": 30,
              "type": "info",
              "text": "High-Speed Quiet Study Zone"
            },
            {
              "pitch": 0,
              "yaw": -80,
              "type": "scene",
              "text": "View Terrace Garden",
              "sceneId": "terrace"
            },
            {
              "pitch": 0,
              "yaw": 180,
              "type": "scene",
              "text": "Back to Bedroom",
              "sceneId": "bedroom"
            }
          ]
        },
        {
          "id": "terrace",
          "title": "Rooftop Terrace Garden",
          "panoramaUrl": "/panoramas/terrace-outlook.jpg",
          "initialPitch": 5,
          "initialYaw": 30,
          "hotSpots": [
            {
              "pitch": 0,
              "yaw": 180,
              "type": "scene",
              "text": "Back to Study Hall",
              "sceneId": "study"
            }
          ]
        }
      ]
    },
    "amenities": [
      "High-Speed WiFi",
      "Air Conditioning",
      "Biometric Access",
      "24/7 CCTV & Security",
      "Daily Housekeeping",
      "RO Drinking Water",
      "Elevator/Lift",
      "Attached Washroom"
    ],
    "houseRules": [
      "Biometric gate access by 10:30 PM",
      "Female guests allowed with prior notice",
      "Strict zero-tolerance quiet study environment"
    ],
    "foodIncluded": true,
    "foodPlans": [
      {
        "id": "two_meals",
        "name": "2 Meals (Breakfast + Dinner)",
        "price": 2800,
        "description": "Nutritious breakfast and dinner"
      },
      {
        "id": "three_meals",
        "name": "3 Meals (Breakfast + Lunch + Dinner)",
        "price": 4000,
        "description": "All 3 daily fresh meals + evening tea"
      }
    ],
    "rating": 4.9,
    "reviewCount": 56,
    "owner": {
      "name": "Sunita Roy",
      "phone": "+91 98112 33445",
      "email": "sunita.roy@scholarhaven.com",
      "verified": true
    },
    "rooms": [
      {
        "roomId": "room-g1",
        "roomNumber": "204",
        "sharingType": "Double",
        "floor": 2,
        "rentPerBed": 10500,
        "hasBalcony": true,
        "hasAttachedBathroom": true,
        "beds": [
          {
            "bedId": "bed-g1-A",
            "bedNumber": "Bed A (Sunlit Balcony view)",
            "isOccupied": false,
            "tenant": null
          },
          {
            "bedId": "bed-g1-B",
            "bedNumber": "Bed B",
            "isOccupied": false,
            "tenant": null
          }
        ]
      },
      {
        "roomId": "room-g2",
        "roomNumber": "205",
        "sharingType": "Single",
        "floor": 2,
        "rentPerBed": 15500,
        "hasBalcony": false,
        "hasAttachedBathroom": true,
        "beds": [
          {
            "bedId": "bed-g2-A",
            "bedNumber": "Executive Single Suite",
            "isOccupied": false,
            "tenant": null
          }
        ]
      }
    ]
  },
  {
    "_id": "prop-103",
    "id": "prop-103",
    "title": "Apex Co-Living Studios & Flats",
    "tagline": "Modern 1BHK & 2BHK shared flats for tech interns and university scholars",
    "description": "Live independently with flatmates in an upscale gated community. Features swimming pool, fitness center, modular kitchen, and community workspace. Zero brokerage with flexible leases.",
    "propertyType": "Flat",
    "genderPreference": "Boys",
    "address": {
      "street": "Baner-Pashan Link Road",
      "city": "Pune",
      "state": "Maharashtra",
      "pincode": "411045",
      "landmark": "Near Balewadi High Street",
      "coordinates": {
        "lat": 18.559,
        "lng": 73.7868
      }
    },
    "pricing": {
      "startingPrice": 7800,
      "securityDeposit": 12000,
      "maintenanceFee": 1500,
      "electricityRule": "Split equally among flatmates",
      "noticePeriodDays": 45
    },
    "images": [
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
    ],
    "gallery": [
      {
        "url": "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=1000&q=80",
        "category": "bedroom",
        "caption": "Apex Co-Living Studios & Flats - Primary Bedroom"
      },
      {
        "url": "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80",
        "category": "living",
        "caption": "Apex Co-Living Studios & Flats - Common Lounge & Living"
      },
      {
        "url": "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=80",
        "category": "washroom",
        "caption": "Apex Co-Living Studios & Flats - Attached Sanitized Washroom"
      },
      {
        "url": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80",
        "category": "balcony",
        "caption": "Apex Co-Living Studios & Flats - Airy Balcony & View"
      },
      {
        "url": "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1000&q=80",
        "category": "kitchen",
        "caption": "Apex Co-Living Studios & Flats - Modular Kitchen & Dining"
      },
      {
        "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
        "category": "exterior",
        "caption": "Apex Co-Living Studios & Flats - Secured Building Elevation"
      }
    ],
    "virtualTour": {
      "type": "equirectangular",
      "panoramaUrl": "/panoramas/modern-studio.jpg",
      "previewUrl": "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=1000&q=80",
      "scenes": [
        {
          "id": "studio",
          "title": "Modern Executive Studio",
          "panoramaUrl": "/panoramas/modern-studio.jpg",
          "initialPitch": 0,
          "initialYaw": 90,
          "hotSpots": [
            {
              "pitch": -5,
              "yaw": 120,
              "type": "info",
              "text": "Smart Workspace & Wardrobe"
            },
            {
              "pitch": 0,
              "yaw": 220,
              "type": "scene",
              "text": "View Living Lounge",
              "sceneId": "living"
            }
          ]
        },
        {
          "id": "living",
          "title": "Open-Plan Living & Dining",
          "panoramaUrl": "/panoramas/living-lounge.jpg",
          "initialPitch": -2,
          "initialYaw": 0,
          "hotSpots": [
            {
              "pitch": 0,
              "yaw": 90,
              "type": "scene",
              "text": "Step onto Balcony",
              "sceneId": "balcony"
            },
            {
              "pitch": 0,
              "yaw": 180,
              "type": "scene",
              "text": "Back to Studio",
              "sceneId": "studio"
            }
          ]
        },
        {
          "id": "balcony",
          "title": "Skyline City Balcony",
          "panoramaUrl": "/panoramas/balcony-view.jpg",
          "initialPitch": 0,
          "initialYaw": 0,
          "hotSpots": [
            {
              "pitch": 0,
              "yaw": 180,
              "type": "scene",
              "text": "Return to Living Room",
              "sceneId": "living"
            }
          ]
        }
      ]
    },
    "amenities": [
      "High-Speed WiFi",
      "Swimming Pool",
      "Gym Access",
      "Power Backup",
      "Refrigerator",
      "Microwave",
      "Two-Wheeler Parking",
      "Car Parking"
    ],
    "houseRules": [
      "Gated community society rules apply",
      "No loud music in corridors after 11 PM",
      "Registered parking spot included"
    ],
    "foodIncluded": false,
    "foodPlans": [
      {
        "id": "none",
        "name": "Self Cooking (Kitchen equipped)",
        "price": 0,
        "description": "Includes refrigerator, gas stove, RO filter"
      }
    ],
    "rating": 4.6,
    "reviewCount": 31,
    "owner": {
      "name": "Rajesh Kulkarni",
      "phone": "+91 97654 11223",
      "email": "rajesh.kulkarni@apex.com",
      "verified": true
    },
    "rooms": [
      {
        "roomId": "room-ap1",
        "roomNumber": "Flat 402 - Bedroom 1",
        "sharingType": "Double",
        "floor": 4,
        "rentPerBed": 8200,
        "hasBalcony": true,
        "hasAttachedBathroom": true,
        "beds": [
          {
            "bedId": "bed-ap1-A",
            "bedNumber": "Bed A",
            "isOccupied": false,
            "tenant": null
          },
          {
            "bedId": "bed-ap1-B",
            "bedNumber": "Bed B",
            "isOccupied": false,
            "tenant": null
          }
        ]
      },
      {
        "roomId": "room-ap2",
        "roomNumber": "Flat 402 - Bedroom 2",
        "sharingType": "Single",
        "floor": 4,
        "rentPerBed": 13000,
        "hasBalcony": false,
        "hasAttachedBathroom": false,
        "beds": [
          {
            "bedId": "bed-ap2-A",
            "bedNumber": "Private Bedroom",
            "isOccupied": true,
            "tenant": {
              "name": "Sameer T.",
              "college": "Symbiosis"
            }
          }
        ]
      }
    ]
  },
  {
    "_id": "prop-104",
    "id": "prop-104",
    "title": "CyberHive Co-Living & PG",
    "tagline": "Vibrant community living next to Hitec City & Mindspace",
    "description": "Designed for tech interns and professionals in Hyderabad. Enjoy fiber internet, gaming zone with PS5, community movie nights, and freshly prepared hot meals.",
    "propertyType": "PG",
    "genderPreference": "Unisex",
    "address": {
      "street": "Madhapur Main Rd, Kakatiya Hills",
      "city": "Hyderabad",
      "state": "Telangana",
      "pincode": "500081",
      "landmark": "5 mins to Durgam Cheruvu Metro Station",
      "coordinates": {
        "lat": 17.4399,
        "lng": 78.3908
      }
    },
    "pricing": {
      "startingPrice": 7200,
      "securityDeposit": 8000,
      "maintenanceFee": 1000,
      "electricityRule": "Prepaid card system",
      "noticePeriodDays": 30
    },
    "images": [
      "https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1000&q=80"
    ],
    "gallery": [
      {
        "url": "https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&w=1000&q=80",
        "category": "bedroom",
        "caption": "CyberHive Co-Living & PG - Primary Bedroom"
      },
      {
        "url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1000&q=80",
        "category": "living",
        "caption": "CyberHive Co-Living & PG - Common Lounge & Living"
      },
      {
        "url": "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=1000&q=80",
        "category": "washroom",
        "caption": "CyberHive Co-Living & PG - Attached Sanitized Washroom"
      },
      {
        "url": "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1000&q=80",
        "category": "balcony",
        "caption": "CyberHive Co-Living & PG - Airy Balcony & View"
      },
      {
        "url": "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=80",
        "category": "kitchen",
        "caption": "CyberHive Co-Living & PG - Modular Kitchen & Dining"
      },
      {
        "url": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80",
        "category": "exterior",
        "caption": "CyberHive Co-Living & PG - Secured Building Elevation"
      },
      {
        "url": "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1000&q=80",
        "category": "bedroom",
        "caption": "CyberHive Co-Living & PG - Study Station & Wardrobe"
      }
    ],
    "virtualTour": {
      "type": "equirectangular",
      "panoramaUrl": "/panoramas/executive-suite.jpg",
      "previewUrl": "https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&w=1000&q=80",
      "scenes": [
        {
          "id": "bedroom",
          "title": "Executive Single Bed Room",
          "panoramaUrl": "/panoramas/executive-suite.jpg",
          "initialPitch": 0,
          "initialYaw": 15,
          "hotSpots": [
            {
              "pitch": -5,
              "yaw": 30,
              "type": "info",
              "text": "Study Desk & Direct LAN"
            },
            {
              "pitch": 0,
              "yaw": 190,
              "type": "scene",
              "text": "Visit Gaming Lounge",
              "sceneId": "lounge"
            }
          ]
        },
        {
          "id": "lounge",
          "title": "Gaming & Coworking Lounge",
          "panoramaUrl": "/panoramas/living-lounge.jpg",
          "initialPitch": 3,
          "initialYaw": 60,
          "hotSpots": [
            {
              "pitch": 0,
              "yaw": 240,
              "type": "scene",
              "text": "Step into Courtyard",
              "sceneId": "courtyard"
            },
            {
              "pitch": 0,
              "yaw": 180,
              "type": "scene",
              "text": "Back to Room",
              "sceneId": "bedroom"
            }
          ]
        },
        {
          "id": "courtyard",
          "title": "Open Air Courtyard & Garden",
          "panoramaUrl": "/panoramas/garden-courtyard.jpg",
          "initialPitch": 0,
          "initialYaw": 180,
          "hotSpots": [
            {
              "pitch": 0,
              "yaw": 0,
              "type": "scene",
              "text": "Back to Lounge",
              "sceneId": "lounge"
            }
          ]
        }
      ]
    },
    "amenities": [
      "High-Speed WiFi",
      "Air Conditioning",
      "Gaming Room",
      "Daily Housekeeping",
      "Power Backup",
      "RO Drinking Water",
      "24/7 CCTV & Security"
    ],
    "houseRules": [
      "ID verification required at check-in",
      "Common area quiet hours after midnight"
    ],
    "foodIncluded": true,
    "foodPlans": [
      {
        "id": "two_meals",
        "name": "2 Meals (Breakfast + Dinner)",
        "price": 2200,
        "description": "South and North Indian varieties"
      },
      {
        "id": "three_meals",
        "name": "3 Meals (Breakfast + Lunch + Dinner)",
        "price": 3400,
        "description": "Includes packed office lunch option"
      }
    ],
    "rating": 4.7,
    "reviewCount": 28,
    "owner": {
      "name": "Karthik Reddy",
      "phone": "+91 99887 66554",
      "email": "karthik@cyberhive.in",
      "verified": true
    },
    "rooms": [
      {
        "roomId": "room-ch1",
        "roomNumber": "301",
        "sharingType": "Triple",
        "floor": 3,
        "rentPerBed": 7200,
        "hasBalcony": true,
        "hasAttachedBathroom": true,
        "beds": [
          {
            "bedId": "bed-ch1-A",
            "bedNumber": "Bed A (Balcony)",
            "isOccupied": false,
            "tenant": null
          },
          {
            "bedId": "bed-ch1-B",
            "bedNumber": "Bed B (Desk side)",
            "isOccupied": true,
            "tenant": {
              "name": "Nikhil",
              "college": "IIIT-H"
            }
          },
          {
            "bedId": "bed-ch1-C",
            "bedNumber": "Bed C",
            "isOccupied": false,
            "tenant": null
          }
        ]
      }
    ]
  },
  {
    "_id": "prop-105",
    "id": "prop-105",
    "title": "HSR Serene Girls PG",
    "tagline": "Peaceful and secure stay in Bangalore prime startup sector",
    "description": "Located in HSR Sector 2, walking distance from cafeterias and coworking spaces. Features clean home-cooked South & North Indian food, high-speed WiFi, and biometric doors.",
    "propertyType": "PG",
    "genderPreference": "Girls",
    "address": {
      "street": "19th Main, Sector 2, HSR Layout",
      "city": "Bangalore",
      "state": "Karnataka",
      "pincode": "560102",
      "landmark": "Near NIFT & BDA Complex",
      "coordinates": {
        "lat": 12.9116,
        "lng": 77.6389
      }
    },
    "pricing": {
      "startingPrice": 8800,
      "securityDeposit": 9000,
      "maintenanceFee": 1000,
      "electricityRule": "Included in rent up to 50 units",
      "noticePeriodDays": 30
    },
    "images": [
      "https://images.unsplash.com/photo-1540518614846-7ede433c4b13?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1502005097973-6a7082348e28?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1000&q=80"
    ],
    "gallery": [
      {
        "url": "https://images.unsplash.com/photo-1540518614846-7ede433c4b13?auto=format&fit=crop&w=1000&q=80",
        "category": "bedroom",
        "caption": "HSR Serene Girls PG - Primary Bedroom"
      },
      {
        "url": "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1000&q=80",
        "category": "living",
        "caption": "HSR Serene Girls PG - Common Lounge & Living"
      },
      {
        "url": "https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?auto=format&fit=crop&w=1000&q=80",
        "category": "washroom",
        "caption": "HSR Serene Girls PG - Attached Sanitized Washroom"
      },
      {
        "url": "https://images.unsplash.com/photo-1502005097973-6a7082348e28?auto=format&fit=crop&w=1000&q=80",
        "category": "balcony",
        "caption": "HSR Serene Girls PG - Airy Balcony & View"
      },
      {
        "url": "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1000&q=80",
        "category": "kitchen",
        "caption": "HSR Serene Girls PG - Modular Kitchen & Dining"
      },
      {
        "url": "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1000&q=80",
        "category": "exterior",
        "caption": "HSR Serene Girls PG - Secured Building Elevation"
      },
      {
        "url": "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1000&q=80",
        "category": "bedroom",
        "caption": "HSR Serene Girls PG - Study Station & Wardrobe"
      }
    ],
    "virtualTour": {
      "type": "equirectangular",
      "panoramaUrl": "/panoramas/campus-residence.jpg",
      "previewUrl": "https://images.unsplash.com/photo-1540518614846-7ede433c4b13?auto=format&fit=crop&w=1000&q=80",
      "scenes": [
        {
          "id": "bedroom",
          "title": "Campus Twin Study Room",
          "panoramaUrl": "/panoramas/campus-residence.jpg",
          "initialPitch": 0,
          "initialYaw": 120,
          "hotSpots": [
            {
              "pitch": -5,
              "yaw": 140,
              "type": "info",
              "text": "Bed A Study Area"
            },
            {
              "pitch": 0,
              "yaw": -60,
              "type": "scene",
              "text": "Go to Recreation Hall",
              "sceneId": "lounge"
            }
          ]
        },
        {
          "id": "lounge",
          "title": "Community Recreation Hall",
          "panoramaUrl": "/panoramas/living-lounge.jpg",
          "initialPitch": 2,
          "initialYaw": 0,
          "hotSpots": [
            {
              "pitch": 0,
              "yaw": 90,
              "type": "scene",
              "text": "Sunset Terrace",
              "sceneId": "terrace"
            },
            {
              "pitch": 0,
              "yaw": 180,
              "type": "scene",
              "text": "Back to Room",
              "sceneId": "bedroom"
            }
          ]
        },
        {
          "id": "terrace",
          "title": "Sunset Terrace Outlook",
          "panoramaUrl": "/panoramas/terrace-outlook.jpg",
          "initialPitch": 0,
          "initialYaw": 70,
          "hotSpots": [
            {
              "pitch": 0,
              "yaw": 180,
              "type": "scene",
              "text": "Back to Recreation Hall",
              "sceneId": "lounge"
            }
          ]
        }
      ]
    },
    "amenities": [
      "High-Speed WiFi",
      "Air Conditioning",
      "Power Backup",
      "Daily Housekeeping",
      "RO Drinking Water",
      "Washing Machine"
    ],
    "houseRules": [
      "Entry by 10:30 PM",
      "Quiet hours from 10 PM",
      "No smoking"
    ],
    "foodIncluded": true,
    "foodPlans": [
      {
        "id": "three_meals",
        "name": "3 Meals Included",
        "price": 0,
        "description": "Breakfast, Lunch & Dinner buffet included"
      }
    ],
    "rating": 4.9,
    "reviewCount": 39,
    "owner": {
      "name": "Meenakshi Iyer",
      "phone": "+91 98451 22334",
      "email": "meenakshi@hsrpg.com",
      "verified": true
    },
    "rooms": [
      {
        "roomId": "room-hsr1",
        "roomNumber": "102",
        "sharingType": "Double",
        "floor": 1,
        "rentPerBed": 8800,
        "hasBalcony": true,
        "hasAttachedBathroom": true,
        "beds": [
          {
            "bedId": "bed-hsr1-A",
            "bedNumber": "Bed A",
            "isOccupied": false,
            "tenant": null
          },
          {
            "bedId": "bed-hsr1-B",
            "bedNumber": "Bed B",
            "isOccupied": false,
            "tenant": null
          }
        ]
      }
    ]
  },
  {
    "_id": "prop-106",
    "id": "prop-106",
    "title": "Indiranagar Urban Scholars PG",
    "tagline": "Premium boutique boys stay in the heart of 100ft Road nightlife & cafes",
    "description": "Perfect for working interns and students. Walking distance from Indiranagar Metro Station. Includes AC, high-speed WiFi, laundry, and daily cleaning.",
    "propertyType": "PG",
    "genderPreference": "Boys",
    "address": {
      "street": "12th Main, HAL 2nd Stage, Indiranagar",
      "city": "Bangalore",
      "state": "Karnataka",
      "pincode": "560038",
      "landmark": "Near CMH Hospital & Metro",
      "coordinates": {
        "lat": 12.9784,
        "lng": 77.6408
      }
    },
    "pricing": {
      "startingPrice": 11000,
      "securityDeposit": 12000,
      "maintenanceFee": 1200,
      "electricityRule": "As per meter",
      "noticePeriodDays": 30
    },
    "images": [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1565182999561-18d7dc61c393?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1507038772120-7ffe76f79d0d?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=1000&q=80"
    ],
    "gallery": [
      {
        "url": "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1000&q=80",
        "category": "bedroom",
        "caption": "Indiranagar Urban Scholars PG - Primary Bedroom"
      },
      {
        "url": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80",
        "category": "living",
        "caption": "Indiranagar Urban Scholars PG - Common Lounge & Living"
      },
      {
        "url": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80",
        "category": "washroom",
        "caption": "Indiranagar Urban Scholars PG - Attached Sanitized Washroom"
      },
      {
        "url": "https://images.unsplash.com/photo-1565182999561-18d7dc61c393?auto=format&fit=crop&w=1000&q=80",
        "category": "balcony",
        "caption": "Indiranagar Urban Scholars PG - Airy Balcony & View"
      },
      {
        "url": "https://images.unsplash.com/photo-1507038772120-7ffe76f79d0d?auto=format&fit=crop&w=1000&q=80",
        "category": "kitchen",
        "caption": "Indiranagar Urban Scholars PG - Modular Kitchen & Dining"
      },
      {
        "url": "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1000&q=80",
        "category": "exterior",
        "caption": "Indiranagar Urban Scholars PG - Secured Building Elevation"
      },
      {
        "url": "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=1000&q=80",
        "category": "bedroom",
        "caption": "Indiranagar Urban Scholars PG - Study Station & Wardrobe"
      }
    ],
    "virtualTour": {
      "type": "equirectangular",
      "panoramaUrl": "/panoramas/deluxe-bedroom.jpg",
      "previewUrl": "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1000&q=80",
      "scenes": [
        {
          "id": "bedroom",
          "title": "Deluxe Twin Study Bedroom",
          "panoramaUrl": "/panoramas/deluxe-bedroom.jpg",
          "initialPitch": -2,
          "initialYaw": 110,
          "hotSpots": [
            {
              "pitch": -10,
              "yaw": 115,
              "type": "info",
              "text": "Dedicated Study Desk & High-speed Fiber"
            },
            {
              "pitch": 0,
              "yaw": 210,
              "type": "scene",
              "text": "Step out to Balcony",
              "sceneId": "balcony"
            },
            {
              "pitch": 2,
              "yaw": -40,
              "type": "scene",
              "text": "Walk to Common Lounge",
              "sceneId": "lounge"
            }
          ]
        },
        {
          "id": "balcony",
          "title": "Private Balcony Outlook",
          "panoramaUrl": "/panoramas/balcony-view.jpg",
          "initialPitch": 0,
          "initialYaw": 45,
          "hotSpots": [
            {
              "pitch": 0,
              "yaw": 180,
              "type": "scene",
              "text": "Return to Bedroom",
              "sceneId": "bedroom"
            }
          ]
        },
        {
          "id": "lounge",
          "title": "Resident Common Lounge",
          "panoramaUrl": "/panoramas/living-lounge.jpg",
          "initialPitch": 0,
          "initialYaw": 0,
          "hotSpots": [
            {
              "pitch": -5,
              "yaw": 45,
              "type": "info",
              "text": "Community TV & Coworking Area"
            },
            {
              "pitch": 0,
              "yaw": 180,
              "type": "scene",
              "text": "Go to Bedroom",
              "sceneId": "bedroom"
            }
          ]
        }
      ]
    },
    "amenities": [
      "High-Speed WiFi",
      "Air Conditioning",
      "Power Backup",
      "Attached Washroom",
      "Daily Housekeeping",
      "Gym Access"
    ],
    "houseRules": [
      "No smoking inside rooms",
      "Visitors allowed in day hours"
    ],
    "foodIncluded": false,
    "foodPlans": [
      {
        "id": "two_meals",
        "name": "2 Meals Plan",
        "price": 2800,
        "description": "Breakfast & Dinner"
      }
    ],
    "rating": 4.8,
    "reviewCount": 35,
    "owner": {
      "name": "Arjun Nambiar",
      "phone": "+91 97412 88990",
      "email": "arjun@urbanindiranagar.com",
      "verified": true
    },
    "rooms": [
      {
        "roomId": "room-in1",
        "roomNumber": "201",
        "sharingType": "Single",
        "floor": 2,
        "rentPerBed": 16000,
        "hasBalcony": true,
        "hasAttachedBathroom": true,
        "beds": [
          {
            "bedId": "bed-in1-A",
            "bedNumber": "Private Single Bed",
            "isOccupied": false,
            "tenant": null
          }
        ]
      },
      {
        "roomId": "room-in2",
        "roomNumber": "202",
        "sharingType": "Double",
        "floor": 2,
        "rentPerBed": 11000,
        "hasBalcony": false,
        "hasAttachedBathroom": true,
        "beds": [
          {
            "bedId": "bed-in2-A",
            "bedNumber": "Bed A",
            "isOccupied": false,
            "tenant": null
          },
          {
            "bedId": "bed-in2-B",
            "bedNumber": "Bed B",
            "isOccupied": true,
            "tenant": {
              "name": "Varun K.",
              "college": "St. Josephs"
            }
          }
        ]
      }
    ]
  },
  {
    "_id": "prop-107",
    "id": "prop-107",
    "title": "North Campus Scholar Suites",
    "tagline": "Top-rated boys PG directly opposite Patel Chest Institute",
    "description": "Perfect for Delhi University students. Walk to SRCC, Hansraj, Kirori Mal, and Arts Faculty. AC rooms, high-speed fiber WiFi, and 4 meals daily.",
    "propertyType": "PG",
    "genderPreference": "Boys",
    "address": {
      "street": "Malka Ganj Main Rd",
      "city": "Delhi",
      "state": "Delhi NCR",
      "pincode": "110007",
      "landmark": "Near Vishwavidyalaya Metro & DU Law Faculty",
      "coordinates": {
        "lat": 28.6853,
        "lng": 77.2115
      }
    },
    "pricing": {
      "startingPrice": 8500,
      "securityDeposit": 8500,
      "maintenanceFee": 1000,
      "electricityRule": "Metered per room",
      "noticePeriodDays": 30
    },
    "images": [
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1582582621959-48d27397dc69?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?auto=format&fit=crop&w=1000&q=80"
    ],
    "gallery": [
      {
        "url": "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1000&q=80",
        "category": "bedroom",
        "caption": "North Campus Scholar Suites - Primary Bedroom"
      },
      {
        "url": "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1000&q=80",
        "category": "living",
        "caption": "North Campus Scholar Suites - Common Lounge & Living"
      },
      {
        "url": "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1000&q=80",
        "category": "washroom",
        "caption": "North Campus Scholar Suites - Attached Sanitized Washroom"
      },
      {
        "url": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1000&q=80",
        "category": "balcony",
        "caption": "North Campus Scholar Suites - Airy Balcony & View"
      },
      {
        "url": "https://images.unsplash.com/photo-1582582621959-48d27397dc69?auto=format&fit=crop&w=1000&q=80",
        "category": "kitchen",
        "caption": "North Campus Scholar Suites - Modular Kitchen & Dining"
      },
      {
        "url": "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&w=1000&q=80",
        "category": "exterior",
        "caption": "North Campus Scholar Suites - Secured Building Elevation"
      },
      {
        "url": "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?auto=format&fit=crop&w=1000&q=80",
        "category": "bedroom",
        "caption": "North Campus Scholar Suites - Study Station & Wardrobe"
      }
    ],
    "virtualTour": {
      "type": "equirectangular",
      "panoramaUrl": "/panoramas/master-bedroom.jpg",
      "previewUrl": "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1000&q=80",
      "scenes": [
        {
          "id": "bedroom",
          "title": "Master Academic Study Suite",
          "panoramaUrl": "/panoramas/master-bedroom.jpg",
          "initialPitch": -2,
          "initialYaw": 80,
          "hotSpots": [
            {
              "pitch": -8,
              "yaw": 85,
              "type": "info",
              "text": "Ergonomic Desk & Bookshelf"
            },
            {
              "pitch": 0,
              "yaw": 180,
              "type": "scene",
              "text": "Go to Study Library",
              "sceneId": "study"
            }
          ]
        },
        {
          "id": "study",
          "title": "Quiet Study Hall & Library",
          "panoramaUrl": "/panoramas/study-hall.jpg",
          "initialPitch": 0,
          "initialYaw": 120,
          "hotSpots": [
            {
              "pitch": -5,
              "yaw": 30,
              "type": "info",
              "text": "High-Speed Quiet Study Zone"
            },
            {
              "pitch": 0,
              "yaw": -80,
              "type": "scene",
              "text": "View Terrace Garden",
              "sceneId": "terrace"
            },
            {
              "pitch": 0,
              "yaw": 180,
              "type": "scene",
              "text": "Back to Bedroom",
              "sceneId": "bedroom"
            }
          ]
        },
        {
          "id": "terrace",
          "title": "Rooftop Terrace Garden",
          "panoramaUrl": "/panoramas/terrace-outlook.jpg",
          "initialPitch": 5,
          "initialYaw": 30,
          "hotSpots": [
            {
              "pitch": 0,
              "yaw": 180,
              "type": "scene",
              "text": "Back to Study Hall",
              "sceneId": "study"
            }
          ]
        }
      ]
    },
    "amenities": [
      "High-Speed WiFi",
      "Air Conditioning",
      "Power Backup",
      "Daily Housekeeping",
      "RO Drinking Water",
      "Attached Washroom"
    ],
    "houseRules": [
      "Study hours maintained after 10 PM",
      "No smoking",
      "Gate closes at 11 PM"
    ],
    "foodIncluded": true,
    "foodPlans": [
      {
        "id": "included",
        "name": "4 Meals Included",
        "price": 0,
        "description": "Breakfast, Lunch, Evening Snack & Dinner"
      }
    ],
    "rating": 4.8,
    "reviewCount": 47,
    "owner": {
      "name": "Sanjay Aggarwal",
      "phone": "+91 98101 44556",
      "email": "sanjay@northcampuspg.com",
      "verified": true
    },
    "rooms": [
      {
        "roomId": "room-nc1",
        "roomNumber": "101",
        "sharingType": "Double",
        "floor": 1,
        "rentPerBed": 9500,
        "hasBalcony": true,
        "hasAttachedBathroom": true,
        "beds": [
          {
            "bedId": "bed-nc1-A",
            "bedNumber": "Bed A",
            "isOccupied": false,
            "tenant": null
          },
          {
            "bedId": "bed-nc1-B",
            "bedNumber": "Bed B",
            "isOccupied": false,
            "tenant": null
          }
        ]
      }
    ]
  },
  {
    "_id": "prop-108",
    "id": "prop-108",
    "title": "Noida Sector 62 Co-Living Flats",
    "tagline": "Modern 2BHK shared flat next to Tech Mahindra & JIIT Campus",
    "description": "Fully furnished high-rise society flat in Sector 62 Noida. Enjoy clubhouse, gym, power backup, and high-speed fiber internet.",
    "propertyType": "Flat",
    "genderPreference": "Unisex",
    "address": {
      "street": "Block B, Sector 62",
      "city": "Delhi",
      "state": "Delhi NCR",
      "pincode": "201309",
      "landmark": "Near Noida Electronic City Metro & JIIT",
      "coordinates": {
        "lat": 28.628,
        "lng": 77.3649
      }
    },
    "pricing": {
      "startingPrice": 6800,
      "securityDeposit": 10000,
      "maintenanceFee": 1200,
      "electricityRule": "Equal split between 4 flatmates",
      "noticePeriodDays": 30
    },
    "images": [
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1000&q=80"
    ],
    "gallery": [
      {
        "url": "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1000&q=80",
        "category": "bedroom",
        "caption": "Noida Sector 62 Co-Living Flats - Primary Bedroom"
      },
      {
        "url": "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?auto=format&fit=crop&w=1000&q=80",
        "category": "living",
        "caption": "Noida Sector 62 Co-Living Flats - Common Lounge & Living"
      },
      {
        "url": "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=80",
        "category": "washroom",
        "caption": "Noida Sector 62 Co-Living Flats - Attached Sanitized Washroom"
      },
      {
        "url": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80",
        "category": "balcony",
        "caption": "Noida Sector 62 Co-Living Flats - Airy Balcony & View"
      },
      {
        "url": "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80",
        "category": "kitchen",
        "caption": "Noida Sector 62 Co-Living Flats - Modular Kitchen & Dining"
      },
      {
        "url": "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1000&q=80",
        "category": "exterior",
        "caption": "Noida Sector 62 Co-Living Flats - Secured Building Elevation"
      }
    ],
    "virtualTour": {
      "type": "equirectangular",
      "panoramaUrl": "/panoramas/modern-studio.jpg",
      "previewUrl": "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1000&q=80",
      "scenes": [
        {
          "id": "studio",
          "title": "Modern Executive Studio",
          "panoramaUrl": "/panoramas/modern-studio.jpg",
          "initialPitch": 0,
          "initialYaw": 90,
          "hotSpots": [
            {
              "pitch": -5,
              "yaw": 120,
              "type": "info",
              "text": "Smart Workspace & Wardrobe"
            },
            {
              "pitch": 0,
              "yaw": 220,
              "type": "scene",
              "text": "View Living Lounge",
              "sceneId": "living"
            }
          ]
        },
        {
          "id": "living",
          "title": "Open-Plan Living & Dining",
          "panoramaUrl": "/panoramas/living-lounge.jpg",
          "initialPitch": -2,
          "initialYaw": 0,
          "hotSpots": [
            {
              "pitch": 0,
              "yaw": 90,
              "type": "scene",
              "text": "Step onto Balcony",
              "sceneId": "balcony"
            },
            {
              "pitch": 0,
              "yaw": 180,
              "type": "scene",
              "text": "Back to Studio",
              "sceneId": "studio"
            }
          ]
        },
        {
          "id": "balcony",
          "title": "Skyline City Balcony",
          "panoramaUrl": "/panoramas/balcony-view.jpg",
          "initialPitch": 0,
          "initialYaw": 0,
          "hotSpots": [
            {
              "pitch": 0,
              "yaw": 180,
              "type": "scene",
              "text": "Return to Living Room",
              "sceneId": "living"
            }
          ]
        }
      ]
    },
    "amenities": [
      "High-Speed WiFi",
      "Air Conditioning",
      "Power Backup",
      "Gym Access",
      "Swimming Pool",
      "Two-Wheeler Parking"
    ],
    "houseRules": [
      "Gated society protocol",
      "No loud parties after 11 PM"
    ],
    "foodIncluded": false,
    "foodPlans": [
      {
        "id": "none",
        "name": "Self Cooking",
        "price": 0,
        "description": "Equipped kitchen provided"
      }
    ],
    "rating": 4.7,
    "reviewCount": 22,
    "owner": {
      "name": "Deepak Sharma",
      "phone": "+91 99112 00112",
      "email": "deepak@noidastays.in",
      "verified": true
    },
    "rooms": [
      {
        "roomId": "room-noi1",
        "roomNumber": "Tower 3 - 802 Bedroom 1",
        "sharingType": "Double",
        "floor": 8,
        "rentPerBed": 6800,
        "hasBalcony": true,
        "hasAttachedBathroom": true,
        "beds": [
          {
            "bedId": "bed-noi1-A",
            "bedNumber": "Bed A",
            "isOccupied": false,
            "tenant": null
          },
          {
            "bedId": "bed-noi1-B",
            "bedNumber": "Bed B",
            "isOccupied": false,
            "tenant": null
          }
        ]
      }
    ]
  },
  {
    "_id": "prop-109",
    "id": "prop-109",
    "title": "Viman Nagar Blossom Girls Residency",
    "tagline": "Vibrant stay opposite Symbiosis International University Pune",
    "description": "Walk to Symbiosis Campus in 3 minutes. Air-conditioned rooms, healthy meals, high-speed WiFi, laundry services, and 24/7 warden security.",
    "propertyType": "PG",
    "genderPreference": "Girls",
    "address": {
      "street": "Viman Nagar Central Ave",
      "city": "Pune",
      "state": "Maharashtra",
      "pincode": "411014",
      "landmark": "Opposite Symbiosis Law School & Phoenix Marketcity",
      "coordinates": {
        "lat": 18.5679,
        "lng": 73.9143
      }
    },
    "pricing": {
      "startingPrice": 9500,
      "securityDeposit": 10000,
      "maintenanceFee": 1000,
      "electricityRule": "Flat ₹500/month AC fee in summer",
      "noticePeriodDays": 30
    },
    "images": [
      "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1560448204-61dc36dc98c8?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1000&q=80"
    ],
    "gallery": [
      {
        "url": "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=1000&q=80",
        "category": "bedroom",
        "caption": "Viman Nagar Blossom Girls Residency - Primary Bedroom"
      },
      {
        "url": "https://images.unsplash.com/photo-1560448204-61dc36dc98c8?auto=format&fit=crop&w=1000&q=80",
        "category": "living",
        "caption": "Viman Nagar Blossom Girls Residency - Common Lounge & Living"
      },
      {
        "url": "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=1000&q=80",
        "category": "washroom",
        "caption": "Viman Nagar Blossom Girls Residency - Attached Sanitized Washroom"
      },
      {
        "url": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80",
        "category": "balcony",
        "caption": "Viman Nagar Blossom Girls Residency - Airy Balcony & View"
      },
      {
        "url": "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1000&q=80",
        "category": "kitchen",
        "caption": "Viman Nagar Blossom Girls Residency - Modular Kitchen & Dining"
      },
      {
        "url": "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1000&q=80",
        "category": "exterior",
        "caption": "Viman Nagar Blossom Girls Residency - Secured Building Elevation"
      },
      {
        "url": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1000&q=80",
        "category": "bedroom",
        "caption": "Viman Nagar Blossom Girls Residency - Study Station & Wardrobe"
      }
    ],
    "virtualTour": {
      "type": "equirectangular",
      "panoramaUrl": "/panoramas/executive-suite.jpg",
      "previewUrl": "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=1000&q=80",
      "scenes": [
        {
          "id": "bedroom",
          "title": "Executive Single Bed Room",
          "panoramaUrl": "/panoramas/executive-suite.jpg",
          "initialPitch": 0,
          "initialYaw": 15,
          "hotSpots": [
            {
              "pitch": -5,
              "yaw": 30,
              "type": "info",
              "text": "Study Desk & Direct LAN"
            },
            {
              "pitch": 0,
              "yaw": 190,
              "type": "scene",
              "text": "Visit Gaming Lounge",
              "sceneId": "lounge"
            }
          ]
        },
        {
          "id": "lounge",
          "title": "Gaming & Coworking Lounge",
          "panoramaUrl": "/panoramas/living-lounge.jpg",
          "initialPitch": 3,
          "initialYaw": 60,
          "hotSpots": [
            {
              "pitch": 0,
              "yaw": 240,
              "type": "scene",
              "text": "Step into Courtyard",
              "sceneId": "courtyard"
            },
            {
              "pitch": 0,
              "yaw": 180,
              "type": "scene",
              "text": "Back to Room",
              "sceneId": "bedroom"
            }
          ]
        },
        {
          "id": "courtyard",
          "title": "Open Air Courtyard & Garden",
          "panoramaUrl": "/panoramas/garden-courtyard.jpg",
          "initialPitch": 0,
          "initialYaw": 180,
          "hotSpots": [
            {
              "pitch": 0,
              "yaw": 0,
              "type": "scene",
              "text": "Back to Lounge",
              "sceneId": "lounge"
            }
          ]
        }
      ]
    },
    "amenities": [
      "High-Speed WiFi",
      "Air Conditioning",
      "Power Backup",
      "Daily Housekeeping",
      "Biometric Access",
      "RO Drinking Water"
    ],
    "houseRules": [
      "Entry by 10:30 PM",
      "No non-resident male visitors in rooms"
    ],
    "foodIncluded": true,
    "foodPlans": [
      {
        "id": "included",
        "name": "Breakfast & Dinner Included",
        "price": 0,
        "description": "Hygienic meals everyday"
      }
    ],
    "rating": 4.9,
    "reviewCount": 38,
    "owner": {
      "name": "Kavita Deshmukh",
      "phone": "+91 98220 33112",
      "email": "kavita@blossompune.com",
      "verified": true
    },
    "rooms": [
      {
        "roomId": "room-vn1",
        "roomNumber": "202",
        "sharingType": "Double",
        "floor": 2,
        "rentPerBed": 9500,
        "hasBalcony": true,
        "hasAttachedBathroom": true,
        "beds": [
          {
            "bedId": "bed-vn1-A",
            "bedNumber": "Bed A",
            "isOccupied": false,
            "tenant": null
          },
          {
            "bedId": "bed-vn1-B",
            "bedNumber": "Bed B",
            "isOccupied": false,
            "tenant": null
          }
        ]
      }
    ]
  },
  {
    "_id": "prop-110",
    "id": "prop-110",
    "title": "Hinjawadi Techies Co-Living Flat",
    "tagline": "Modern 3BHK flat near Wipro & Infosys Phase 1",
    "description": "Designed for IT professionals and college interns. High-speed 300 Mbps internet, weekly deep cleaning, swimming pool, and dedicated workspace.",
    "propertyType": "Flat",
    "genderPreference": "Boys",
    "address": {
      "street": "Blue Ridge Township, Phase 1",
      "city": "Pune",
      "state": "Maharashtra",
      "pincode": "411057",
      "landmark": "Next to Infosys Circle & Cognizant",
      "coordinates": {
        "lat": 18.5913,
        "lng": 73.7389
      }
    },
    "pricing": {
      "startingPrice": 7500,
      "securityDeposit": 10000,
      "maintenanceFee": 1500,
      "electricityRule": "Divided among flatmates",
      "noticePeriodDays": 30
    },
    "images": [
      "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1000&q=80"
    ],
    "gallery": [
      {
        "url": "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?auto=format&fit=crop&w=1000&q=80",
        "category": "bedroom",
        "caption": "Hinjawadi Techies Co-Living Flat - Primary Bedroom"
      },
      {
        "url": "https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?auto=format&fit=crop&w=1000&q=80",
        "category": "living",
        "caption": "Hinjawadi Techies Co-Living Flat - Common Lounge & Living"
      },
      {
        "url": "https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?auto=format&fit=crop&w=1000&q=80",
        "category": "washroom",
        "caption": "Hinjawadi Techies Co-Living Flat - Attached Sanitized Washroom"
      },
      {
        "url": "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1000&q=80",
        "category": "balcony",
        "caption": "Hinjawadi Techies Co-Living Flat - Airy Balcony & View"
      },
      {
        "url": "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1000&q=80",
        "category": "kitchen",
        "caption": "Hinjawadi Techies Co-Living Flat - Modular Kitchen & Dining"
      },
      {
        "url": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1000&q=80",
        "category": "exterior",
        "caption": "Hinjawadi Techies Co-Living Flat - Secured Building Elevation"
      }
    ],
    "virtualTour": {
      "type": "equirectangular",
      "panoramaUrl": "/panoramas/campus-residence.jpg",
      "previewUrl": "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?auto=format&fit=crop&w=1000&q=80",
      "scenes": [
        {
          "id": "bedroom",
          "title": "Campus Twin Study Room",
          "panoramaUrl": "/panoramas/campus-residence.jpg",
          "initialPitch": 0,
          "initialYaw": 120,
          "hotSpots": [
            {
              "pitch": -5,
              "yaw": 140,
              "type": "info",
              "text": "Bed A Study Area"
            },
            {
              "pitch": 0,
              "yaw": -60,
              "type": "scene",
              "text": "Go to Recreation Hall",
              "sceneId": "lounge"
            }
          ]
        },
        {
          "id": "lounge",
          "title": "Community Recreation Hall",
          "panoramaUrl": "/panoramas/living-lounge.jpg",
          "initialPitch": 2,
          "initialYaw": 0,
          "hotSpots": [
            {
              "pitch": 0,
              "yaw": 90,
              "type": "scene",
              "text": "Sunset Terrace",
              "sceneId": "terrace"
            },
            {
              "pitch": 0,
              "yaw": 180,
              "type": "scene",
              "text": "Back to Room",
              "sceneId": "bedroom"
            }
          ]
        },
        {
          "id": "terrace",
          "title": "Sunset Terrace Outlook",
          "panoramaUrl": "/panoramas/terrace-outlook.jpg",
          "initialPitch": 0,
          "initialYaw": 70,
          "hotSpots": [
            {
              "pitch": 0,
              "yaw": 180,
              "type": "scene",
              "text": "Back to Recreation Hall",
              "sceneId": "lounge"
            }
          ]
        }
      ]
    },
    "amenities": [
      "High-Speed WiFi",
      "Swimming Pool",
      "Gym Access",
      "Power Backup",
      "Washing Machine",
      "Refrigerator"
    ],
    "houseRules": [
      "Gated society ID cards required",
      "Parking in designated slot only"
    ],
    "foodIncluded": false,
    "foodPlans": [
      {
        "id": "none",
        "name": "Self Cooking",
        "price": 0,
        "description": "Fully functional kitchen with chimney"
      }
    ],
    "rating": 4.6,
    "reviewCount": 19,
    "owner": {
      "name": "Pramod Joshi",
      "phone": "+91 98901 77221",
      "email": "pramod@blueridgestays.com",
      "verified": true
    },
    "rooms": [
      {
        "roomId": "room-hj1",
        "roomNumber": "Flat 1204 - Bed 1",
        "sharingType": "Double",
        "floor": 12,
        "rentPerBed": 7500,
        "hasBalcony": true,
        "hasAttachedBathroom": true,
        "beds": [
          {
            "bedId": "bed-hj1-A",
            "bedNumber": "Bed A",
            "isOccupied": false,
            "tenant": null
          },
          {
            "bedId": "bed-hj1-B",
            "bedNumber": "Bed B",
            "isOccupied": false,
            "tenant": null
          }
        ]
      }
    ]
  },
  {
    "_id": "prop-111",
    "id": "prop-111",
    "title": "Gachibowli TechPark Residency",
    "tagline": "Modern unisex co-living close to Microsoft, Google & IIIT Hyderabad",
    "description": "Walking distance to major IT campuses. Fully furnished studio rooms with high-speed WiFi, cafeteria, gym, and 24/7 concierge.",
    "propertyType": "PG",
    "genderPreference": "Unisex",
    "address": {
      "street": "Old Mumbai Highway, Gachibowli",
      "city": "Hyderabad",
      "state": "Telangana",
      "pincode": "500032",
      "landmark": "Near DLF Cyber City & IIIT Junction",
      "coordinates": {
        "lat": 17.4401,
        "lng": 78.3489
      }
    },
    "pricing": {
      "startingPrice": 8900,
      "securityDeposit": 10000,
      "maintenanceFee": 1200,
      "electricityRule": "Submeter per room",
      "noticePeriodDays": 30
    },
    "images": [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1502005097973-6a7082348e28?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1000&q=80"
    ],
    "gallery": [
      {
        "url": "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80",
        "category": "bedroom",
        "caption": "Gachibowli TechPark Residency - Primary Bedroom"
      },
      {
        "url": "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80",
        "category": "living",
        "caption": "Gachibowli TechPark Residency - Common Lounge & Living"
      },
      {
        "url": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80",
        "category": "washroom",
        "caption": "Gachibowli TechPark Residency - Attached Sanitized Washroom"
      },
      {
        "url": "https://images.unsplash.com/photo-1502005097973-6a7082348e28?auto=format&fit=crop&w=1000&q=80",
        "category": "balcony",
        "caption": "Gachibowli TechPark Residency - Airy Balcony & View"
      },
      {
        "url": "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=80",
        "category": "kitchen",
        "caption": "Gachibowli TechPark Residency - Modular Kitchen & Dining"
      },
      {
        "url": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80",
        "category": "exterior",
        "caption": "Gachibowli TechPark Residency - Secured Building Elevation"
      },
      {
        "url": "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1000&q=80",
        "category": "bedroom",
        "caption": "Gachibowli TechPark Residency - Study Station & Wardrobe"
      }
    ],
    "virtualTour": {
      "type": "equirectangular",
      "panoramaUrl": "/panoramas/deluxe-bedroom.jpg",
      "previewUrl": "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80",
      "scenes": [
        {
          "id": "bedroom",
          "title": "Deluxe Twin Study Bedroom",
          "panoramaUrl": "/panoramas/deluxe-bedroom.jpg",
          "initialPitch": -2,
          "initialYaw": 110,
          "hotSpots": [
            {
              "pitch": -10,
              "yaw": 115,
              "type": "info",
              "text": "Dedicated Study Desk & High-speed Fiber"
            },
            {
              "pitch": 0,
              "yaw": 210,
              "type": "scene",
              "text": "Step out to Balcony",
              "sceneId": "balcony"
            },
            {
              "pitch": 2,
              "yaw": -40,
              "type": "scene",
              "text": "Walk to Common Lounge",
              "sceneId": "lounge"
            }
          ]
        },
        {
          "id": "balcony",
          "title": "Private Balcony Outlook",
          "panoramaUrl": "/panoramas/balcony-view.jpg",
          "initialPitch": 0,
          "initialYaw": 45,
          "hotSpots": [
            {
              "pitch": 0,
              "yaw": 180,
              "type": "scene",
              "text": "Return to Bedroom",
              "sceneId": "bedroom"
            }
          ]
        },
        {
          "id": "lounge",
          "title": "Resident Common Lounge",
          "panoramaUrl": "/panoramas/living-lounge.jpg",
          "initialPitch": 0,
          "initialYaw": 0,
          "hotSpots": [
            {
              "pitch": -5,
              "yaw": 45,
              "type": "info",
              "text": "Community TV & Coworking Area"
            },
            {
              "pitch": 0,
              "yaw": 180,
              "type": "scene",
              "text": "Go to Bedroom",
              "sceneId": "bedroom"
            }
          ]
        }
      ]
    },
    "amenities": [
      "High-Speed WiFi",
      "Air Conditioning",
      "Power Backup",
      "Gym Access",
      "Daily Housekeeping",
      "RO Drinking Water"
    ],
    "houseRules": [
      "Keycard entry system",
      "Visitors permitted in lounge"
    ],
    "foodIncluded": true,
    "foodPlans": [
      {
        "id": "two_meals",
        "name": "2 Meals Plan",
        "price": 2400,
        "description": "Breakfast & Dinner buffet"
      }
    ],
    "rating": 4.8,
    "reviewCount": 41,
    "owner": {
      "name": "Venkatesh Rao",
      "phone": "+91 98490 12345",
      "email": "venkat@gachibowliliving.com",
      "verified": true
    },
    "rooms": [
      {
        "roomId": "room-gb1",
        "roomNumber": "401",
        "sharingType": "Double",
        "floor": 4,
        "rentPerBed": 8900,
        "hasBalcony": true,
        "hasAttachedBathroom": true,
        "beds": [
          {
            "bedId": "bed-gb1-A",
            "bedNumber": "Bed A",
            "isOccupied": false,
            "tenant": null
          },
          {
            "bedId": "bed-gb1-B",
            "bedNumber": "Bed B",
            "isOccupied": false,
            "tenant": null
          }
        ]
      }
    ]
  },
  {
    "_id": "prop-112",
    "id": "prop-112",
    "title": "Powai Lakeside 2BHK Student Flat",
    "tagline": "Scenic lake-view flat near IIT Bombay campus",
    "description": "Perfect for IIT Bombay postgraduates and young researchers. Gated Hiranandani society flat with high ceilings, piped gas, and 24/7 security.",
    "propertyType": "Flat",
    "genderPreference": "Unisex",
    "address": {
      "street": "Hiranandani Gardens, Powai",
      "city": "Mumbai",
      "state": "Maharashtra",
      "pincode": "400076",
      "landmark": "Near IIT Bombay Main Gate & Powai Lake",
      "coordinates": {
        "lat": 19.1176,
        "lng": 72.906
      }
    },
    "pricing": {
      "startingPrice": 14000,
      "securityDeposit": 25000,
      "maintenanceFee": 2000,
      "electricityRule": "Equally split via Adani bill",
      "noticePeriodDays": 45
    },
    "images": [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1565182999561-18d7dc61c393?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
    ],
    "gallery": [
      {
        "url": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1000&q=80",
        "category": "bedroom",
        "caption": "Powai Lakeside 2BHK Student Flat - Primary Bedroom"
      },
      {
        "url": "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1000&q=80",
        "category": "living",
        "caption": "Powai Lakeside 2BHK Student Flat - Common Lounge & Living"
      },
      {
        "url": "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1000&q=80",
        "category": "washroom",
        "caption": "Powai Lakeside 2BHK Student Flat - Attached Sanitized Washroom"
      },
      {
        "url": "https://images.unsplash.com/photo-1565182999561-18d7dc61c393?auto=format&fit=crop&w=1000&q=80",
        "category": "balcony",
        "caption": "Powai Lakeside 2BHK Student Flat - Airy Balcony & View"
      },
      {
        "url": "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1000&q=80",
        "category": "kitchen",
        "caption": "Powai Lakeside 2BHK Student Flat - Modular Kitchen & Dining"
      },
      {
        "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
        "category": "exterior",
        "caption": "Powai Lakeside 2BHK Student Flat - Secured Building Elevation"
      }
    ],
    "virtualTour": {
      "type": "equirectangular",
      "panoramaUrl": "/panoramas/master-bedroom.jpg",
      "previewUrl": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1000&q=80",
      "scenes": [
        {
          "id": "bedroom",
          "title": "Master Academic Study Suite",
          "panoramaUrl": "/panoramas/master-bedroom.jpg",
          "initialPitch": -2,
          "initialYaw": 80,
          "hotSpots": [
            {
              "pitch": -8,
              "yaw": 85,
              "type": "info",
              "text": "Ergonomic Desk & Bookshelf"
            },
            {
              "pitch": 0,
              "yaw": 180,
              "type": "scene",
              "text": "Go to Study Library",
              "sceneId": "study"
            }
          ]
        },
        {
          "id": "study",
          "title": "Quiet Study Hall & Library",
          "panoramaUrl": "/panoramas/study-hall.jpg",
          "initialPitch": 0,
          "initialYaw": 120,
          "hotSpots": [
            {
              "pitch": -5,
              "yaw": 30,
              "type": "info",
              "text": "High-Speed Quiet Study Zone"
            },
            {
              "pitch": 0,
              "yaw": -80,
              "type": "scene",
              "text": "View Terrace Garden",
              "sceneId": "terrace"
            },
            {
              "pitch": 0,
              "yaw": 180,
              "type": "scene",
              "text": "Back to Bedroom",
              "sceneId": "bedroom"
            }
          ]
        },
        {
          "id": "terrace",
          "title": "Rooftop Terrace Garden",
          "panoramaUrl": "/panoramas/terrace-outlook.jpg",
          "initialPitch": 5,
          "initialYaw": 30,
          "hotSpots": [
            {
              "pitch": 0,
              "yaw": 180,
              "type": "scene",
              "text": "Back to Study Hall",
              "sceneId": "study"
            }
          ]
        }
      ]
    },
    "amenities": [
      "High-Speed WiFi",
      "Air Conditioning",
      "Power Backup",
      "Two-Wheeler Parking",
      "Car Parking",
      "Swimming Pool"
    ],
    "houseRules": [
      "Society gate verification for all guests",
      "Quiet hours post 11 PM"
    ],
    "foodIncluded": false,
    "foodPlans": [
      {
        "id": "none",
        "name": "Self Cooking",
        "price": 0,
        "description": "Modular kitchen with gas line"
      }
    ],
    "rating": 4.9,
    "reviewCount": 18,
    "owner": {
      "name": "Alok Merchant",
      "phone": "+91 98200 44556",
      "email": "alok@powaihomes.com",
      "verified": true
    },
    "rooms": [
      {
        "roomId": "room-pw1",
        "roomNumber": "Tower B - Flat 701 Room 1",
        "sharingType": "Double",
        "floor": 7,
        "rentPerBed": 14000,
        "hasBalcony": true,
        "hasAttachedBathroom": true,
        "beds": [
          {
            "bedId": "bed-pw1-A",
            "bedNumber": "Bed A",
            "isOccupied": false,
            "tenant": null
          },
          {
            "bedId": "bed-pw1-B",
            "bedNumber": "Bed B",
            "isOccupied": false,
            "tenant": null
          }
        ]
      }
    ]
  },
  {
    "_id": "prop-113",
    "id": "prop-113",
    "title": "OMR IT Corridor Scholars PG",
    "tagline": "Budget-friendly PG for Anna University & IT interns in Chennai",
    "description": "Located right on Rajiv Gandhi Salai (OMR). AC rooms, high-speed WiFi, South Indian vegetarian and non-vegetarian food, and daily housekeeping.",
    "propertyType": "PG",
    "genderPreference": "Boys",
    "address": {
      "street": "Thoraipakkam Main Rd, OMR",
      "city": "Chennai",
      "state": "Tamil Nadu",
      "pincode": "600097",
      "landmark": "Near Cognizant OMR & AKDR Golf Village",
      "coordinates": {
        "lat": 12.9348,
        "lng": 80.2312
      }
    },
    "pricing": {
      "startingPrice": 6500,
      "securityDeposit": 7500,
      "maintenanceFee": 800,
      "electricityRule": "Prepaid submeter",
      "noticePeriodDays": 30
    },
    "images": [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1507038772120-7ffe76f79d0d?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=1000&q=80"
    ],
    "gallery": [
      {
        "url": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80",
        "category": "bedroom",
        "caption": "OMR IT Corridor Scholars PG - Primary Bedroom"
      },
      {
        "url": "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1000&q=80",
        "category": "living",
        "caption": "OMR IT Corridor Scholars PG - Common Lounge & Living"
      },
      {
        "url": "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=80",
        "category": "washroom",
        "caption": "OMR IT Corridor Scholars PG - Attached Sanitized Washroom"
      },
      {
        "url": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1000&q=80",
        "category": "balcony",
        "caption": "OMR IT Corridor Scholars PG - Airy Balcony & View"
      },
      {
        "url": "https://images.unsplash.com/photo-1507038772120-7ffe76f79d0d?auto=format&fit=crop&w=1000&q=80",
        "category": "kitchen",
        "caption": "OMR IT Corridor Scholars PG - Modular Kitchen & Dining"
      },
      {
        "url": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80",
        "category": "exterior",
        "caption": "OMR IT Corridor Scholars PG - Secured Building Elevation"
      },
      {
        "url": "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=1000&q=80",
        "category": "bedroom",
        "caption": "OMR IT Corridor Scholars PG - Study Station & Wardrobe"
      }
    ],
    "virtualTour": {
      "type": "equirectangular",
      "panoramaUrl": "/panoramas/modern-studio.jpg",
      "previewUrl": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80",
      "scenes": [
        {
          "id": "studio",
          "title": "Modern Executive Studio",
          "panoramaUrl": "/panoramas/modern-studio.jpg",
          "initialPitch": 0,
          "initialYaw": 90,
          "hotSpots": [
            {
              "pitch": -5,
              "yaw": 120,
              "type": "info",
              "text": "Smart Workspace & Wardrobe"
            },
            {
              "pitch": 0,
              "yaw": 220,
              "type": "scene",
              "text": "View Living Lounge",
              "sceneId": "living"
            }
          ]
        },
        {
          "id": "living",
          "title": "Open-Plan Living & Dining",
          "panoramaUrl": "/panoramas/living-lounge.jpg",
          "initialPitch": -2,
          "initialYaw": 0,
          "hotSpots": [
            {
              "pitch": 0,
              "yaw": 90,
              "type": "scene",
              "text": "Step onto Balcony",
              "sceneId": "balcony"
            },
            {
              "pitch": 0,
              "yaw": 180,
              "type": "scene",
              "text": "Back to Studio",
              "sceneId": "studio"
            }
          ]
        },
        {
          "id": "balcony",
          "title": "Skyline City Balcony",
          "panoramaUrl": "/panoramas/balcony-view.jpg",
          "initialPitch": 0,
          "initialYaw": 0,
          "hotSpots": [
            {
              "pitch": 0,
              "yaw": 180,
              "type": "scene",
              "text": "Return to Living Room",
              "sceneId": "living"
            }
          ]
        }
      ]
    },
    "amenities": [
      "High-Speed WiFi",
      "Air Conditioning",
      "Power Backup",
      "Daily Housekeeping",
      "RO Drinking Water"
    ],
    "houseRules": [
      "Gate closes at 10:30 PM",
      "Alcohol prohibited"
    ],
    "foodIncluded": true,
    "foodPlans": [
      {
        "id": "included",
        "name": "Breakfast & Dinner Included",
        "price": 0,
        "description": "Traditional South Indian meals"
      }
    ],
    "rating": 4.6,
    "reviewCount": 26,
    "owner": {
      "name": "Murugan Swaminathan",
      "phone": "+91 94440 98765",
      "email": "murugan@omrstays.com",
      "verified": true
    },
    "rooms": [
      {
        "roomId": "room-omr1",
        "roomNumber": "101",
        "sharingType": "Triple",
        "floor": 1,
        "rentPerBed": 6500,
        "hasBalcony": false,
        "hasAttachedBathroom": true,
        "beds": [
          {
            "bedId": "bed-omr1-A",
            "bedNumber": "Bed A",
            "isOccupied": false,
            "tenant": null
          },
          {
            "bedId": "bed-omr1-B",
            "bedNumber": "Bed B",
            "isOccupied": false,
            "tenant": null
          },
          {
            "bedId": "bed-omr1-C",
            "bedNumber": "Bed C",
            "isOccupied": false,
            "tenant": null
          }
        ]
      }
    ]
  },
  {
    "_id": "prop-114",
    "id": "prop-114",
    "title": "Electronic City Phase 1 Smart Stay",
    "tagline": "Walking distance to Infosys gate 6 & Wipro Campus Bangalore",
    "description": "High-speed internet, silent study corner, ergonomic furniture, and 24/7 power backup. Ideal for tech interns and PES University scholars.",
    "propertyType": "PG",
    "genderPreference": "Boys",
    "address": {
      "street": "Neeladri Road, Electronic City Phase 1",
      "city": "Bangalore",
      "state": "Karnataka",
      "pincode": "560100",
      "landmark": "Near Wipro Gate 5 & Velankani Drive",
      "coordinates": {
        "lat": 12.8399,
        "lng": 77.677
      }
    },
    "pricing": {
      "startingPrice": 7200,
      "securityDeposit": 8000,
      "maintenanceFee": 1000,
      "electricityRule": "Metered per room",
      "noticePeriodDays": 30
    },
    "images": [
      "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1582582621959-48d27397dc69?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&w=1000&q=80"
    ],
    "gallery": [
      {
        "url": "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1000&q=80",
        "category": "bedroom",
        "caption": "Electronic City Phase 1 Smart Stay - Primary Bedroom"
      },
      {
        "url": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1000&q=80",
        "category": "living",
        "caption": "Electronic City Phase 1 Smart Stay - Common Lounge & Living"
      },
      {
        "url": "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=1000&q=80",
        "category": "washroom",
        "caption": "Electronic City Phase 1 Smart Stay - Attached Sanitized Washroom"
      },
      {
        "url": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80",
        "category": "balcony",
        "caption": "Electronic City Phase 1 Smart Stay - Airy Balcony & View"
      },
      {
        "url": "https://images.unsplash.com/photo-1582582621959-48d27397dc69?auto=format&fit=crop&w=1000&q=80",
        "category": "kitchen",
        "caption": "Electronic City Phase 1 Smart Stay - Modular Kitchen & Dining"
      },
      {
        "url": "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1000&q=80",
        "category": "exterior",
        "caption": "Electronic City Phase 1 Smart Stay - Secured Building Elevation"
      },
      {
        "url": "https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&w=1000&q=80",
        "category": "bedroom",
        "caption": "Electronic City Phase 1 Smart Stay - Study Station & Wardrobe"
      }
    ],
    "virtualTour": {
      "type": "equirectangular",
      "panoramaUrl": "/panoramas/executive-suite.jpg",
      "previewUrl": "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1000&q=80",
      "scenes": [
        {
          "id": "bedroom",
          "title": "Executive Single Bed Room",
          "panoramaUrl": "/panoramas/executive-suite.jpg",
          "initialPitch": 0,
          "initialYaw": 15,
          "hotSpots": [
            {
              "pitch": -5,
              "yaw": 30,
              "type": "info",
              "text": "Study Desk & Direct LAN"
            },
            {
              "pitch": 0,
              "yaw": 190,
              "type": "scene",
              "text": "Visit Gaming Lounge",
              "sceneId": "lounge"
            }
          ]
        },
        {
          "id": "lounge",
          "title": "Gaming & Coworking Lounge",
          "panoramaUrl": "/panoramas/living-lounge.jpg",
          "initialPitch": 3,
          "initialYaw": 60,
          "hotSpots": [
            {
              "pitch": 0,
              "yaw": 240,
              "type": "scene",
              "text": "Step into Courtyard",
              "sceneId": "courtyard"
            },
            {
              "pitch": 0,
              "yaw": 180,
              "type": "scene",
              "text": "Back to Room",
              "sceneId": "bedroom"
            }
          ]
        },
        {
          "id": "courtyard",
          "title": "Open Air Courtyard & Garden",
          "panoramaUrl": "/panoramas/garden-courtyard.jpg",
          "initialPitch": 0,
          "initialYaw": 180,
          "hotSpots": [
            {
              "pitch": 0,
              "yaw": 0,
              "type": "scene",
              "text": "Back to Lounge",
              "sceneId": "lounge"
            }
          ]
        }
      ]
    },
    "amenities": [
      "High-Speed WiFi",
      "Power Backup",
      "Daily Housekeeping",
      "Washing Machine",
      "RO Drinking Water"
    ],
    "houseRules": [
      "Biometric entry anytime for shift workers",
      "Quiet hours post 11 PM"
    ],
    "foodIncluded": true,
    "foodPlans": [
      {
        "id": "two_meals",
        "name": "2 Meals",
        "price": 2000,
        "description": "Breakfast & Dinner"
      }
    ],
    "rating": 4.7,
    "reviewCount": 33,
    "owner": {
      "name": "Kiran Gowda",
      "phone": "+91 99801 22334",
      "email": "kiran@ecitystays.in",
      "verified": true
    },
    "rooms": [
      {
        "roomId": "room-ec1",
        "roomNumber": "201",
        "sharingType": "Double",
        "floor": 2,
        "rentPerBed": 7200,
        "hasBalcony": true,
        "hasAttachedBathroom": true,
        "beds": [
          {
            "bedId": "bed-ec1-A",
            "bedNumber": "Bed A",
            "isOccupied": false,
            "tenant": null
          },
          {
            "bedId": "bed-ec1-B",
            "bedNumber": "Bed B",
            "isOccupied": false,
            "tenant": null
          }
        ]
      }
    ]
  },
  {
    "_id": "prop-115",
    "id": "prop-115",
    "title": "South Campus Green Residency",
    "tagline": "Quiet, leafy student PG near Venkateswara & Gargi College DU",
    "description": "Safe residential neighborhood in Satya Niketan. Clean air-conditioned rooms, healthy meals, and high-speed fiber internet.",
    "propertyType": "PG",
    "genderPreference": "Girls",
    "address": {
      "street": "Satya Niketan Main Road",
      "city": "Delhi",
      "state": "Delhi NCR",
      "pincode": "110021",
      "landmark": "Near Durgabai Deshmukh South Campus Metro",
      "coordinates": {
        "lat": 28.588,
        "lng": 77.165
      }
    },
    "pricing": {
      "startingPrice": 9200,
      "securityDeposit": 10000,
      "maintenanceFee": 1000,
      "electricityRule": "Metered",
      "noticePeriodDays": 30
    },
    "images": [
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1540518614846-7ede433c4b13?auto=format&fit=crop&w=1000&q=80"
    ],
    "gallery": [
      {
        "url": "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1000&q=80",
        "category": "bedroom",
        "caption": "South Campus Green Residency - Primary Bedroom"
      },
      {
        "url": "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80",
        "category": "living",
        "caption": "South Campus Green Residency - Common Lounge & Living"
      },
      {
        "url": "https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?auto=format&fit=crop&w=1000&q=80",
        "category": "washroom",
        "caption": "South Campus Green Residency - Attached Sanitized Washroom"
      },
      {
        "url": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80",
        "category": "balcony",
        "caption": "South Campus Green Residency - Airy Balcony & View"
      },
      {
        "url": "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80",
        "category": "kitchen",
        "caption": "South Campus Green Residency - Modular Kitchen & Dining"
      },
      {
        "url": "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1000&q=80",
        "category": "exterior",
        "caption": "South Campus Green Residency - Secured Building Elevation"
      },
      {
        "url": "https://images.unsplash.com/photo-1540518614846-7ede433c4b13?auto=format&fit=crop&w=1000&q=80",
        "category": "bedroom",
        "caption": "South Campus Green Residency - Study Station & Wardrobe"
      }
    ],
    "virtualTour": {
      "type": "equirectangular",
      "panoramaUrl": "/panoramas/campus-residence.jpg",
      "previewUrl": "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1000&q=80",
      "scenes": [
        {
          "id": "bedroom",
          "title": "Campus Twin Study Room",
          "panoramaUrl": "/panoramas/campus-residence.jpg",
          "initialPitch": 0,
          "initialYaw": 120,
          "hotSpots": [
            {
              "pitch": -5,
              "yaw": 140,
              "type": "info",
              "text": "Bed A Study Area"
            },
            {
              "pitch": 0,
              "yaw": -60,
              "type": "scene",
              "text": "Go to Recreation Hall",
              "sceneId": "lounge"
            }
          ]
        },
        {
          "id": "lounge",
          "title": "Community Recreation Hall",
          "panoramaUrl": "/panoramas/living-lounge.jpg",
          "initialPitch": 2,
          "initialYaw": 0,
          "hotSpots": [
            {
              "pitch": 0,
              "yaw": 90,
              "type": "scene",
              "text": "Sunset Terrace",
              "sceneId": "terrace"
            },
            {
              "pitch": 0,
              "yaw": 180,
              "type": "scene",
              "text": "Back to Room",
              "sceneId": "bedroom"
            }
          ]
        },
        {
          "id": "terrace",
          "title": "Sunset Terrace Outlook",
          "panoramaUrl": "/panoramas/terrace-outlook.jpg",
          "initialPitch": 0,
          "initialYaw": 70,
          "hotSpots": [
            {
              "pitch": 0,
              "yaw": 180,
              "type": "scene",
              "text": "Back to Recreation Hall",
              "sceneId": "lounge"
            }
          ]
        }
      ]
    },
    "amenities": [
      "High-Speed WiFi",
      "Air Conditioning",
      "Power Backup",
      "Daily Housekeeping",
      "RO Drinking Water"
    ],
    "houseRules": [
      "Entry by 10 PM",
      "No unauthorized visitors"
    ],
    "foodIncluded": true,
    "foodPlans": [
      {
        "id": "included",
        "name": "3 Meals Included",
        "price": 0,
        "description": "Freshly prepared homestyle food"
      }
    ],
    "rating": 4.8,
    "reviewCount": 30,
    "owner": {
      "name": "Pooja Verma",
      "phone": "+91 98111 66778",
      "email": "pooja@southcampuspg.in",
      "verified": true
    },
    "rooms": [
      {
        "roomId": "room-sc1",
        "roomNumber": "104",
        "sharingType": "Double",
        "floor": 1,
        "rentPerBed": 9200,
        "hasBalcony": true,
        "hasAttachedBathroom": true,
        "beds": [
          {
            "bedId": "bed-sc1-A",
            "bedNumber": "Bed A",
            "isOccupied": false,
            "tenant": null
          },
          {
            "bedId": "bed-sc1-B",
            "bedNumber": "Bed B",
            "isOccupied": false,
            "tenant": null
          }
        ]
      }
    ]
  },
  {
    "_id": "prop-116",
    "id": "prop-116",
    "title": "Kothrud Elite Scholars PG",
    "tagline": "Modern boys PG near MIT World Peace University Pune",
    "description": "Walk to MIT-WPU in 5 minutes. High-speed internet, dedicated study desks with charging points, and home-cooked Maharashtrian & North Indian food.",
    "propertyType": "PG",
    "genderPreference": "Boys",
    "address": {
      "street": "Paud Road, Kothrud",
      "city": "Pune",
      "state": "Maharashtra",
      "pincode": "411038",
      "landmark": "Near MIT-WPU Gate 3 & Vanaz Metro",
      "coordinates": {
        "lat": 18.5074,
        "lng": 73.8077
      }
    },
    "pricing": {
      "startingPrice": 7000,
      "securityDeposit": 8000,
      "maintenanceFee": 1000,
      "electricityRule": "Included in rent",
      "noticePeriodDays": 30
    },
    "images": [
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1000&q=80"
    ],
    "gallery": [
      {
        "url": "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=1000&q=80",
        "category": "bedroom",
        "caption": "Kothrud Elite Scholars PG - Primary Bedroom"
      },
      {
        "url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1000&q=80",
        "category": "living",
        "caption": "Kothrud Elite Scholars PG - Common Lounge & Living"
      },
      {
        "url": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80",
        "category": "washroom",
        "caption": "Kothrud Elite Scholars PG - Attached Sanitized Washroom"
      },
      {
        "url": "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1000&q=80",
        "category": "balcony",
        "caption": "Kothrud Elite Scholars PG - Airy Balcony & View"
      },
      {
        "url": "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1000&q=80",
        "category": "kitchen",
        "caption": "Kothrud Elite Scholars PG - Modular Kitchen & Dining"
      },
      {
        "url": "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&w=1000&q=80",
        "category": "exterior",
        "caption": "Kothrud Elite Scholars PG - Secured Building Elevation"
      },
      {
        "url": "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1000&q=80",
        "category": "bedroom",
        "caption": "Kothrud Elite Scholars PG - Study Station & Wardrobe"
      }
    ],
    "virtualTour": {
      "type": "equirectangular",
      "panoramaUrl": "/panoramas/deluxe-bedroom.jpg",
      "previewUrl": "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=1000&q=80",
      "scenes": [
        {
          "id": "bedroom",
          "title": "Deluxe Twin Study Bedroom",
          "panoramaUrl": "/panoramas/deluxe-bedroom.jpg",
          "initialPitch": -2,
          "initialYaw": 110,
          "hotSpots": [
            {
              "pitch": -10,
              "yaw": 115,
              "type": "info",
              "text": "Dedicated Study Desk & High-speed Fiber"
            },
            {
              "pitch": 0,
              "yaw": 210,
              "type": "scene",
              "text": "Step out to Balcony",
              "sceneId": "balcony"
            },
            {
              "pitch": 2,
              "yaw": -40,
              "type": "scene",
              "text": "Walk to Common Lounge",
              "sceneId": "lounge"
            }
          ]
        },
        {
          "id": "balcony",
          "title": "Private Balcony Outlook",
          "panoramaUrl": "/panoramas/balcony-view.jpg",
          "initialPitch": 0,
          "initialYaw": 45,
          "hotSpots": [
            {
              "pitch": 0,
              "yaw": 180,
              "type": "scene",
              "text": "Return to Bedroom",
              "sceneId": "bedroom"
            }
          ]
        },
        {
          "id": "lounge",
          "title": "Resident Common Lounge",
          "panoramaUrl": "/panoramas/living-lounge.jpg",
          "initialPitch": 0,
          "initialYaw": 0,
          "hotSpots": [
            {
              "pitch": -5,
              "yaw": 45,
              "type": "info",
              "text": "Community TV & Coworking Area"
            },
            {
              "pitch": 0,
              "yaw": 180,
              "type": "scene",
              "text": "Go to Bedroom",
              "sceneId": "bedroom"
            }
          ]
        }
      ]
    },
    "amenities": [
      "High-Speed WiFi",
      "Daily Housekeeping",
      "RO Drinking Water",
      "Washing Machine",
      "Two-Wheeler Parking"
    ],
    "houseRules": [
      "Gate closes at 11:00 PM",
      "No smoking"
    ],
    "foodIncluded": true,
    "foodPlans": [
      {
        "id": "included",
        "name": "2 Meals Included",
        "price": 0,
        "description": "Breakfast & Dinner"
      }
    ],
    "rating": 4.7,
    "reviewCount": 29,
    "owner": {
      "name": "Sachin Patil",
      "phone": "+91 98224 88776",
      "email": "sachin@kothrudpg.in",
      "verified": true
    },
    "rooms": [
      {
        "roomId": "room-kt1",
        "roomNumber": "302",
        "sharingType": "Double",
        "floor": 3,
        "rentPerBed": 7000,
        "hasBalcony": true,
        "hasAttachedBathroom": true,
        "beds": [
          {
            "bedId": "bed-kt1-A",
            "bedNumber": "Bed A",
            "isOccupied": false,
            "tenant": null
          },
          {
            "bedId": "bed-kt1-B",
            "bedNumber": "Bed B",
            "isOccupied": false,
            "tenant": null
          }
        ]
      }
    ]
  },
  {
    "_id": "prop-117",
    "id": "prop-117",
    "title": "Kondapur Tech Haven Co-Living",
    "tagline": "Chic studio suites near Botanical Garden & Financial District Hyderabad",
    "description": "Perfect for Amazon, Google & Oracle employees and tech interns. Biometric access, rooftop barbecue lounge, and high-speed fiber internet.",
    "propertyType": "PG",
    "genderPreference": "Unisex",
    "address": {
      "street": "Kothaguda X Roads, Kondapur",
      "city": "Hyderabad",
      "state": "Telangana",
      "pincode": "500084",
      "landmark": "Near Sarath City Capital Mall & Botanical Garden",
      "coordinates": {
        "lat": 17.4611,
        "lng": 78.3619
      }
    },
    "pricing": {
      "startingPrice": 8200,
      "securityDeposit": 9000,
      "maintenanceFee": 1000,
      "electricityRule": "Prepaid smart card",
      "noticePeriodDays": 30
    },
    "images": [
      "https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1502005097973-6a7082348e28?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1000&q=80"
    ],
    "gallery": [
      {
        "url": "https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&w=1000&q=80",
        "category": "bedroom",
        "caption": "Kondapur Tech Haven Co-Living - Primary Bedroom"
      },
      {
        "url": "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1000&q=80",
        "category": "living",
        "caption": "Kondapur Tech Haven Co-Living - Common Lounge & Living"
      },
      {
        "url": "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1000&q=80",
        "category": "washroom",
        "caption": "Kondapur Tech Haven Co-Living - Attached Sanitized Washroom"
      },
      {
        "url": "https://images.unsplash.com/photo-1502005097973-6a7082348e28?auto=format&fit=crop&w=1000&q=80",
        "category": "balcony",
        "caption": "Kondapur Tech Haven Co-Living - Airy Balcony & View"
      },
      {
        "url": "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1000&q=80",
        "category": "kitchen",
        "caption": "Kondapur Tech Haven Co-Living - Modular Kitchen & Dining"
      },
      {
        "url": "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1000&q=80",
        "category": "exterior",
        "caption": "Kondapur Tech Haven Co-Living - Secured Building Elevation"
      },
      {
        "url": "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1000&q=80",
        "category": "bedroom",
        "caption": "Kondapur Tech Haven Co-Living - Study Station & Wardrobe"
      }
    ],
    "virtualTour": {
      "type": "equirectangular",
      "panoramaUrl": "/panoramas/master-bedroom.jpg",
      "previewUrl": "https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&w=1000&q=80",
      "scenes": [
        {
          "id": "bedroom",
          "title": "Master Academic Study Suite",
          "panoramaUrl": "/panoramas/master-bedroom.jpg",
          "initialPitch": -2,
          "initialYaw": 80,
          "hotSpots": [
            {
              "pitch": -8,
              "yaw": 85,
              "type": "info",
              "text": "Ergonomic Desk & Bookshelf"
            },
            {
              "pitch": 0,
              "yaw": 180,
              "type": "scene",
              "text": "Go to Study Library",
              "sceneId": "study"
            }
          ]
        },
        {
          "id": "study",
          "title": "Quiet Study Hall & Library",
          "panoramaUrl": "/panoramas/study-hall.jpg",
          "initialPitch": 0,
          "initialYaw": 120,
          "hotSpots": [
            {
              "pitch": -5,
              "yaw": 30,
              "type": "info",
              "text": "High-Speed Quiet Study Zone"
            },
            {
              "pitch": 0,
              "yaw": -80,
              "type": "scene",
              "text": "View Terrace Garden",
              "sceneId": "terrace"
            },
            {
              "pitch": 0,
              "yaw": 180,
              "type": "scene",
              "text": "Back to Bedroom",
              "sceneId": "bedroom"
            }
          ]
        },
        {
          "id": "terrace",
          "title": "Rooftop Terrace Garden",
          "panoramaUrl": "/panoramas/terrace-outlook.jpg",
          "initialPitch": 5,
          "initialYaw": 30,
          "hotSpots": [
            {
              "pitch": 0,
              "yaw": 180,
              "type": "scene",
              "text": "Back to Study Hall",
              "sceneId": "study"
            }
          ]
        }
      ]
    },
    "amenities": [
      "High-Speed WiFi",
      "Air Conditioning",
      "Power Backup",
      "Gym Access",
      "Daily Housekeeping",
      "RO Drinking Water"
    ],
    "houseRules": [
      "Digital check-in",
      "Quiet hours from 11 PM"
    ],
    "foodIncluded": false,
    "foodPlans": [
      {
        "id": "two_meals",
        "name": "2 Meals",
        "price": 2500,
        "description": "Breakfast & Dinner"
      }
    ],
    "rating": 4.8,
    "reviewCount": 37,
    "owner": {
      "name": "Madhavan Naidu",
      "phone": "+91 99480 33445",
      "email": "madhav@kondapurcolive.com",
      "verified": true
    },
    "rooms": [
      {
        "roomId": "room-kp1",
        "roomNumber": "502",
        "sharingType": "Double",
        "floor": 5,
        "rentPerBed": 8200,
        "hasBalcony": true,
        "hasAttachedBathroom": true,
        "beds": [
          {
            "bedId": "bed-kp1-A",
            "bedNumber": "Bed A",
            "isOccupied": false,
            "tenant": null
          },
          {
            "bedId": "bed-kp1-B",
            "bedNumber": "Bed B",
            "isOccupied": false,
            "tenant": null
          }
        ]
      }
    ]
  },
  {
    "_id": "prop-118",
    "id": "prop-118",
    "title": "Andheri West Metro Suites",
    "tagline": "Modern shared flat in Lokhandwala Complex Mumbai",
    "description": "Walking distance to Versova Metro and Kokilaben Hospital. Fully furnished flat with AC, washing machine, modular kitchen, and smart TV.",
    "propertyType": "Flat",
    "genderPreference": "Girls",
    "address": {
      "street": "Lokhandwala Complex, Andheri West",
      "city": "Mumbai",
      "state": "Maharashtra",
      "pincode": "400053",
      "landmark": "Near Infinity Mall & DN Nagar Metro",
      "coordinates": {
        "lat": 19.1419,
        "lng": 72.8272
      }
    },
    "pricing": {
      "startingPrice": 15500,
      "securityDeposit": 30000,
      "maintenanceFee": 2000,
      "electricityRule": "Equally shared between flatmates",
      "noticePeriodDays": 45
    },
    "images": [
      "https://images.unsplash.com/photo-1540518614846-7ede433c4b13?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1565182999561-18d7dc61c393?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1000&q=80"
    ],
    "gallery": [
      {
        "url": "https://images.unsplash.com/photo-1540518614846-7ede433c4b13?auto=format&fit=crop&w=1000&q=80",
        "category": "bedroom",
        "caption": "Andheri West Metro Suites - Primary Bedroom"
      },
      {
        "url": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80",
        "category": "living",
        "caption": "Andheri West Metro Suites - Common Lounge & Living"
      },
      {
        "url": "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=80",
        "category": "washroom",
        "caption": "Andheri West Metro Suites - Attached Sanitized Washroom"
      },
      {
        "url": "https://images.unsplash.com/photo-1565182999561-18d7dc61c393?auto=format&fit=crop&w=1000&q=80",
        "category": "balcony",
        "caption": "Andheri West Metro Suites - Airy Balcony & View"
      },
      {
        "url": "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=80",
        "category": "kitchen",
        "caption": "Andheri West Metro Suites - Modular Kitchen & Dining"
      },
      {
        "url": "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1000&q=80",
        "category": "exterior",
        "caption": "Andheri West Metro Suites - Secured Building Elevation"
      }
    ],
    "virtualTour": {
      "type": "equirectangular",
      "panoramaUrl": "/panoramas/modern-studio.jpg",
      "previewUrl": "https://images.unsplash.com/photo-1540518614846-7ede433c4b13?auto=format&fit=crop&w=1000&q=80",
      "scenes": [
        {
          "id": "studio",
          "title": "Modern Executive Studio",
          "panoramaUrl": "/panoramas/modern-studio.jpg",
          "initialPitch": 0,
          "initialYaw": 90,
          "hotSpots": [
            {
              "pitch": -5,
              "yaw": 120,
              "type": "info",
              "text": "Smart Workspace & Wardrobe"
            },
            {
              "pitch": 0,
              "yaw": 220,
              "type": "scene",
              "text": "View Living Lounge",
              "sceneId": "living"
            }
          ]
        },
        {
          "id": "living",
          "title": "Open-Plan Living & Dining",
          "panoramaUrl": "/panoramas/living-lounge.jpg",
          "initialPitch": -2,
          "initialYaw": 0,
          "hotSpots": [
            {
              "pitch": 0,
              "yaw": 90,
              "type": "scene",
              "text": "Step onto Balcony",
              "sceneId": "balcony"
            },
            {
              "pitch": 0,
              "yaw": 180,
              "type": "scene",
              "text": "Back to Studio",
              "sceneId": "studio"
            }
          ]
        },
        {
          "id": "balcony",
          "title": "Skyline City Balcony",
          "panoramaUrl": "/panoramas/balcony-view.jpg",
          "initialPitch": 0,
          "initialYaw": 0,
          "hotSpots": [
            {
              "pitch": 0,
              "yaw": 180,
              "type": "scene",
              "text": "Return to Living Room",
              "sceneId": "living"
            }
          ]
        }
      ]
    },
    "amenities": [
      "High-Speed WiFi",
      "Air Conditioning",
      "Power Backup",
      "Washing Machine",
      "Refrigerator",
      "Microwave"
    ],
    "houseRules": [
      "Gated society regulations apply",
      "Respect flatmates quiet sleep schedule"
    ],
    "foodIncluded": false,
    "foodPlans": [
      {
        "id": "none",
        "name": "Self Cooking",
        "price": 0,
        "description": "Fully equipped gas kitchen"
      }
    ],
    "rating": 4.9,
    "reviewCount": 16,
    "owner": {
      "name": "Ritu Kapoor",
      "phone": "+91 98205 11223",
      "email": "ritu@mumbaiflats.com",
      "verified": true
    },
    "rooms": [
      {
        "roomId": "room-aw1",
        "roomNumber": "Flat 901 - Room 1",
        "sharingType": "Double",
        "floor": 9,
        "rentPerBed": 15500,
        "hasBalcony": true,
        "hasAttachedBathroom": true,
        "beds": [
          {
            "bedId": "bed-aw1-A",
            "bedNumber": "Bed A",
            "isOccupied": false,
            "tenant": null
          },
          {
            "bedId": "bed-aw1-B",
            "bedNumber": "Bed B",
            "isOccupied": false,
            "tenant": null
          }
        ]
      }
    ]
  },
  {
    "_id": "prop-119",
    "id": "prop-119",
    "title": "Guindy Central Scholars Home",
    "tagline": "Peaceful stay near IIT Madras & Anna University Chennai",
    "description": "Conveniently located near Guindy National Park and metro station. Ideal for Anna University and IIT Madras researchers.",
    "propertyType": "PG",
    "genderPreference": "Boys",
    "address": {
      "street": "Sardar Patel Road, Guindy",
      "city": "Chennai",
      "state": "Tamil Nadu",
      "pincode": "600032",
      "landmark": "Near Guindy Metro & IIT Madras Gandhi Road Gate",
      "coordinates": {
        "lat": 13.0067,
        "lng": 80.2206
      }
    },
    "pricing": {
      "startingPrice": 6900,
      "securityDeposit": 7500,
      "maintenanceFee": 800,
      "electricityRule": "Included in rent",
      "noticePeriodDays": 30
    },
    "images": [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=1000&q=80"
    ],
    "gallery": [
      {
        "url": "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1000&q=80",
        "category": "bedroom",
        "caption": "Guindy Central Scholars Home - Primary Bedroom"
      },
      {
        "url": "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1000&q=80",
        "category": "living",
        "caption": "Guindy Central Scholars Home - Common Lounge & Living"
      },
      {
        "url": "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=1000&q=80",
        "category": "washroom",
        "caption": "Guindy Central Scholars Home - Attached Sanitized Washroom"
      },
      {
        "url": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1000&q=80",
        "category": "balcony",
        "caption": "Guindy Central Scholars Home - Airy Balcony & View"
      },
      {
        "url": "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1000&q=80",
        "category": "kitchen",
        "caption": "Guindy Central Scholars Home - Modular Kitchen & Dining"
      },
      {
        "url": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1000&q=80",
        "category": "exterior",
        "caption": "Guindy Central Scholars Home - Secured Building Elevation"
      },
      {
        "url": "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=1000&q=80",
        "category": "bedroom",
        "caption": "Guindy Central Scholars Home - Study Station & Wardrobe"
      }
    ],
    "virtualTour": {
      "type": "equirectangular",
      "panoramaUrl": "/panoramas/executive-suite.jpg",
      "previewUrl": "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1000&q=80",
      "scenes": [
        {
          "id": "bedroom",
          "title": "Executive Single Bed Room",
          "panoramaUrl": "/panoramas/executive-suite.jpg",
          "initialPitch": 0,
          "initialYaw": 15,
          "hotSpots": [
            {
              "pitch": -5,
              "yaw": 30,
              "type": "info",
              "text": "Study Desk & Direct LAN"
            },
            {
              "pitch": 0,
              "yaw": 190,
              "type": "scene",
              "text": "Visit Gaming Lounge",
              "sceneId": "lounge"
            }
          ]
        },
        {
          "id": "lounge",
          "title": "Gaming & Coworking Lounge",
          "panoramaUrl": "/panoramas/living-lounge.jpg",
          "initialPitch": 3,
          "initialYaw": 60,
          "hotSpots": [
            {
              "pitch": 0,
              "yaw": 240,
              "type": "scene",
              "text": "Step into Courtyard",
              "sceneId": "courtyard"
            },
            {
              "pitch": 0,
              "yaw": 180,
              "type": "scene",
              "text": "Back to Room",
              "sceneId": "bedroom"
            }
          ]
        },
        {
          "id": "courtyard",
          "title": "Open Air Courtyard & Garden",
          "panoramaUrl": "/panoramas/garden-courtyard.jpg",
          "initialPitch": 0,
          "initialYaw": 180,
          "hotSpots": [
            {
              "pitch": 0,
              "yaw": 0,
              "type": "scene",
              "text": "Back to Lounge",
              "sceneId": "lounge"
            }
          ]
        }
      ]
    },
    "amenities": [
      "High-Speed WiFi",
      "Power Backup",
      "Daily Housekeeping",
      "RO Drinking Water",
      "Washing Machine"
    ],
    "houseRules": [
      "Entry by 10:30 PM",
      "No smoking"
    ],
    "foodIncluded": true,
    "foodPlans": [
      {
        "id": "included",
        "name": "Breakfast & Dinner Included",
        "price": 0,
        "description": "Homestyle vegetarian meals"
      }
    ],
    "rating": 4.7,
    "reviewCount": 24,
    "owner": {
      "name": "K. Ramanathan",
      "phone": "+91 94441 55667",
      "email": "ramanathan@guindystays.in",
      "verified": true
    },
    "rooms": [
      {
        "roomId": "room-gd1",
        "roomNumber": "103",
        "sharingType": "Double",
        "floor": 1,
        "rentPerBed": 6900,
        "hasBalcony": false,
        "hasAttachedBathroom": true,
        "beds": [
          {
            "bedId": "bed-gd1-A",
            "bedNumber": "Bed A",
            "isOccupied": false,
            "tenant": null
          },
          {
            "bedId": "bed-gd1-B",
            "bedNumber": "Bed B",
            "isOccupied": false,
            "tenant": null
          }
        ]
      }
    ]
  },
  {
    "_id": "prop-120",
    "id": "prop-120",
    "title": "Whitefield Tech Haven Co-Living",
    "tagline": "Walking distance to ITPL & Brigade Tech Park Bangalore",
    "description": "Premier shared accommodation for tech interns and professionals. Features gym, recreation lounge, high-speed WiFi, and daily housekeeping.",
    "propertyType": "PG",
    "genderPreference": "Unisex",
    "address": {
      "street": "ITPL Main Road, Whitefield",
      "city": "Bangalore",
      "state": "Karnataka",
      "pincode": "560066",
      "landmark": "Near Hopefarm Junction & ITPL Metro",
      "coordinates": {
        "lat": 12.9863,
        "lng": 77.7337
      }
    },
    "pricing": {
      "startingPrice": 8300,
      "securityDeposit": 9000,
      "maintenanceFee": 1000,
      "electricityRule": "Metered per room",
      "noticePeriodDays": 30
    },
    "images": [
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1507038772120-7ffe76f79d0d?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?auto=format&fit=crop&w=1000&q=80"
    ],
    "gallery": [
      {
        "url": "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1000&q=80",
        "category": "bedroom",
        "caption": "Whitefield Tech Haven Co-Living - Primary Bedroom"
      },
      {
        "url": "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?auto=format&fit=crop&w=1000&q=80",
        "category": "living",
        "caption": "Whitefield Tech Haven Co-Living - Common Lounge & Living"
      },
      {
        "url": "https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?auto=format&fit=crop&w=1000&q=80",
        "category": "washroom",
        "caption": "Whitefield Tech Haven Co-Living - Attached Sanitized Washroom"
      },
      {
        "url": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80",
        "category": "balcony",
        "caption": "Whitefield Tech Haven Co-Living - Airy Balcony & View"
      },
      {
        "url": "https://images.unsplash.com/photo-1507038772120-7ffe76f79d0d?auto=format&fit=crop&w=1000&q=80",
        "category": "kitchen",
        "caption": "Whitefield Tech Haven Co-Living - Modular Kitchen & Dining"
      },
      {
        "url": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80",
        "category": "exterior",
        "caption": "Whitefield Tech Haven Co-Living - Secured Building Elevation"
      },
      {
        "url": "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?auto=format&fit=crop&w=1000&q=80",
        "category": "bedroom",
        "caption": "Whitefield Tech Haven Co-Living - Study Station & Wardrobe"
      }
    ],
    "virtualTour": {
      "type": "equirectangular",
      "panoramaUrl": "/panoramas/campus-residence.jpg",
      "previewUrl": "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1000&q=80",
      "scenes": [
        {
          "id": "bedroom",
          "title": "Campus Twin Study Room",
          "panoramaUrl": "/panoramas/campus-residence.jpg",
          "initialPitch": 0,
          "initialYaw": 120,
          "hotSpots": [
            {
              "pitch": -5,
              "yaw": 140,
              "type": "info",
              "text": "Bed A Study Area"
            },
            {
              "pitch": 0,
              "yaw": -60,
              "type": "scene",
              "text": "Go to Recreation Hall",
              "sceneId": "lounge"
            }
          ]
        },
        {
          "id": "lounge",
          "title": "Community Recreation Hall",
          "panoramaUrl": "/panoramas/living-lounge.jpg",
          "initialPitch": 2,
          "initialYaw": 0,
          "hotSpots": [
            {
              "pitch": 0,
              "yaw": 90,
              "type": "scene",
              "text": "Sunset Terrace",
              "sceneId": "terrace"
            },
            {
              "pitch": 0,
              "yaw": 180,
              "type": "scene",
              "text": "Back to Room",
              "sceneId": "bedroom"
            }
          ]
        },
        {
          "id": "terrace",
          "title": "Sunset Terrace Outlook",
          "panoramaUrl": "/panoramas/terrace-outlook.jpg",
          "initialPitch": 0,
          "initialYaw": 70,
          "hotSpots": [
            {
              "pitch": 0,
              "yaw": 180,
              "type": "scene",
              "text": "Back to Recreation Hall",
              "sceneId": "lounge"
            }
          ]
        }
      ]
    },
    "amenities": [
      "High-Speed WiFi",
      "Air Conditioning",
      "Power Backup",
      "Gym Access",
      "Daily Housekeeping",
      "RO Drinking Water"
    ],
    "houseRules": [
      "Biometric 24/7 entry for tech shifts",
      "Quiet hours post 11 PM"
    ],
    "foodIncluded": true,
    "foodPlans": [
      {
        "id": "two_meals",
        "name": "2 Meals",
        "price": 2500,
        "description": "Breakfast & Dinner"
      }
    ],
    "rating": 4.8,
    "reviewCount": 36,
    "owner": {
      "name": "Sunil Hegde",
      "phone": "+91 98455 77889",
      "email": "sunil@whitefieldliving.in",
      "verified": true
    },
    "rooms": [
      {
        "roomId": "room-wf1",
        "roomNumber": "304",
        "sharingType": "Double",
        "floor": 3,
        "rentPerBed": 8300,
        "hasBalcony": true,
        "hasAttachedBathroom": true,
        "beds": [
          {
            "bedId": "bed-wf1-A",
            "bedNumber": "Bed A",
            "isOccupied": false,
            "tenant": null
          },
          {
            "bedId": "bed-wf1-B",
            "bedNumber": "Bed B",
            "isOccupied": false,
            "tenant": null
          }
        ]
      }
    ]
  },
  {
    "_id": "prop-121",
    "id": "prop-121",
    "title": "Gurgaon Cyber City Executive Flat",
    "tagline": "Upscale 2BHK flat near DLF CyberHub & Rapid Metro",
    "description": "Modern luxury flat in Sector 24 Gurgaon. High-speed 500 Mbps fiber internet, swimming pool, tennis court, and dedicated work desk.",
    "propertyType": "Flat",
    "genderPreference": "Unisex",
    "address": {
      "street": "DLF Phase 3, Sector 24",
      "city": "Delhi",
      "state": "Delhi NCR",
      "pincode": "122002",
      "landmark": "Near DLF CyberHub & IndusInd Bank Cyber City Metro",
      "coordinates": {
        "lat": 28.4947,
        "lng": 77.0894
      }
    },
    "pricing": {
      "startingPrice": 16000,
      "securityDeposit": 25000,
      "maintenanceFee": 2000,
      "electricityRule": "Equally shared as per DHBVN bill",
      "noticePeriodDays": 45
    },
    "images": [
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1560448204-61dc36dc98c8?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1582582621959-48d27397dc69?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
    ],
    "gallery": [
      {
        "url": "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1000&q=80",
        "category": "bedroom",
        "caption": "Gurgaon Cyber City Executive Flat - Primary Bedroom"
      },
      {
        "url": "https://images.unsplash.com/photo-1560448204-61dc36dc98c8?auto=format&fit=crop&w=1000&q=80",
        "category": "living",
        "caption": "Gurgaon Cyber City Executive Flat - Common Lounge & Living"
      },
      {
        "url": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80",
        "category": "washroom",
        "caption": "Gurgaon Cyber City Executive Flat - Attached Sanitized Washroom"
      },
      {
        "url": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80",
        "category": "balcony",
        "caption": "Gurgaon Cyber City Executive Flat - Airy Balcony & View"
      },
      {
        "url": "https://images.unsplash.com/photo-1582582621959-48d27397dc69?auto=format&fit=crop&w=1000&q=80",
        "category": "kitchen",
        "caption": "Gurgaon Cyber City Executive Flat - Modular Kitchen & Dining"
      },
      {
        "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
        "category": "exterior",
        "caption": "Gurgaon Cyber City Executive Flat - Secured Building Elevation"
      }
    ],
    "virtualTour": null,
    "amenities": [
      "High-Speed WiFi",
      "Air Conditioning",
      "Power Backup",
      "Swimming Pool",
      "Gym Access",
      "Car Parking"
    ],
    "houseRules": [
      "DLF society security rules",
      "No commercial activities"
    ],
    "foodIncluded": false,
    "foodPlans": [
      {
        "id": "none",
        "name": "Self Cooking",
        "price": 0,
        "description": "Equipped modular kitchen"
      }
    ],
    "rating": 4.9,
    "reviewCount": 20,
    "owner": {
      "name": "Rohit Batra",
      "phone": "+91 98110 55667",
      "email": "rohit@gurgaonflats.in",
      "verified": true
    },
    "rooms": [
      {
        "roomId": "room-ggn1",
        "roomNumber": "Tower 4 - Flat 1102 Room 1",
        "sharingType": "Single",
        "floor": 11,
        "rentPerBed": 24000,
        "hasBalcony": true,
        "hasAttachedBathroom": true,
        "beds": [
          {
            "bedId": "bed-ggn1-A",
            "bedNumber": "Private Master Bed",
            "isOccupied": false,
            "tenant": null
          }
        ]
      },
      {
        "roomId": "room-ggn2",
        "roomNumber": "Tower 4 - Flat 1102 Room 2",
        "sharingType": "Double",
        "floor": 11,
        "rentPerBed": 16000,
        "hasBalcony": false,
        "hasAttachedBathroom": true,
        "beds": [
          {
            "bedId": "bed-ggn2-A",
            "bedNumber": "Bed A",
            "isOccupied": false,
            "tenant": null
          },
          {
            "bedId": "bed-ggn2-B",
            "bedNumber": "Bed B",
            "isOccupied": false,
            "tenant": null
          }
        ]
      }
    ]
  },
  {
    "_id": "prop-122",
    "id": "prop-122",
    "title": "Koramangala 5th Block Boutique Stay",
    "tagline": "Cozy boutique co-living for young creative scholars & startup founders",
    "description": "Heart of Koramangala startup hub. Walking distance to Jyoti Nivas College, multiple cafes, and libraries. Features high-speed WiFi, laundry, and daily cleaning.",
    "propertyType": "PG",
    "genderPreference": "Girls",
    "address": {
      "street": "Koramangala 5th Block, 1st Cross",
      "city": "Bangalore",
      "state": "Karnataka",
      "pincode": "560095",
      "landmark": "Near Jyoti Nivas College & Empire Restaurant",
      "coordinates": {
        "lat": 12.9345,
        "lng": 77.6189
      }
    },
    "pricing": {
      "startingPrice": 9800,
      "securityDeposit": 10000,
      "maintenanceFee": 1000,
      "electricityRule": "Metered",
      "noticePeriodDays": 30
    },
    "images": [
      "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1000&q=80"
    ],
    "gallery": [
      {
        "url": "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=1000&q=80",
        "category": "bedroom",
        "caption": "Koramangala 5th Block Boutique Stay - Primary Bedroom"
      },
      {
        "url": "https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?auto=format&fit=crop&w=1000&q=80",
        "category": "living",
        "caption": "Koramangala 5th Block Boutique Stay - Common Lounge & Living"
      },
      {
        "url": "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1000&q=80",
        "category": "washroom",
        "caption": "Koramangala 5th Block Boutique Stay - Attached Sanitized Washroom"
      },
      {
        "url": "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1000&q=80",
        "category": "balcony",
        "caption": "Koramangala 5th Block Boutique Stay - Airy Balcony & View"
      },
      {
        "url": "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80",
        "category": "kitchen",
        "caption": "Koramangala 5th Block Boutique Stay - Modular Kitchen & Dining"
      },
      {
        "url": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80",
        "category": "exterior",
        "caption": "Koramangala 5th Block Boutique Stay - Secured Building Elevation"
      },
      {
        "url": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1000&q=80",
        "category": "bedroom",
        "caption": "Koramangala 5th Block Boutique Stay - Study Station & Wardrobe"
      }
    ],
    "virtualTour": null,
    "amenities": [
      "High-Speed WiFi",
      "Air Conditioning",
      "Power Backup",
      "Daily Housekeeping",
      "RO Drinking Water",
      "Washing Machine"
    ],
    "houseRules": [
      "Entry by 10:30 PM",
      "No smoking inside property"
    ],
    "foodIncluded": true,
    "foodPlans": [
      {
        "id": "included",
        "name": "Breakfast & Dinner Included",
        "price": 0,
        "description": "Homestyle meals"
      }
    ],
    "rating": 4.8,
    "reviewCount": 31,
    "owner": {
      "name": "Asha Hegde",
      "phone": "+91 98450 11992",
      "email": "asha@koramangalastays.com",
      "verified": true
    },
    "rooms": [
      {
        "roomId": "room-km1",
        "roomNumber": "201",
        "sharingType": "Double",
        "floor": 2,
        "rentPerBed": 9800,
        "hasBalcony": true,
        "hasAttachedBathroom": true,
        "beds": [
          {
            "bedId": "bed-km1-A",
            "bedNumber": "Bed A",
            "isOccupied": false,
            "tenant": null
          },
          {
            "bedId": "bed-km1-B",
            "bedNumber": "Bed B",
            "isOccupied": false,
            "tenant": null
          }
        ]
      }
    ]
  }
];

export const CITIES = ["All Cities","Bangalore","Delhi","Pune","Hyderabad","Mumbai","Chennai"];
export const GENDER_OPTIONS = ["All","Boys","Girls","Unisex"];
export const PROPERTY_TYPES = ["All","PG","Flat"];
export const SHARING_TYPES = ["All","Single","Double","Triple"];
export const AMENITIES_LIST = [
  "High-Speed WiFi",
  "Air Conditioning",
  "Attached Washroom",
  "Power Backup",
  "Daily Housekeeping",
  "Food Included",
  "Gym Access",
  "Biometric Access",
  "Washing Machine",
  "Swimming Pool"
];

export default MOCK_PROPERTIES;
