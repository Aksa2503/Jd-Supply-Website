
"use strict";

// JD SUPPLIES - Product Catalogue
// Add or edit products inside the categories below.

const catalogueData = [
  {
    name: "1. Linen, Bedding & Bed Accessories",
    items: [
      "Flat and fitted bedsheets in different sizes",
      "Pillow covers, pillow protectors, pillows and inserts",
      "Mattress protectors, mattress toppers and bed pads",
      "Duvets, comforters, quilts, blankets and bedspreads",
      "Bed runners, decorative cushions and bolsters",
      "Baby cot linen and protective bedding",
      "Laundry bags, linen tags and identification labels"
    ]
  },
  {
    name: "2. Bathroom Accessories & Fittings",
    items: [
      "Shower curtains, rods, rings and hooks",
      "Bathmats, anti-slip mats and bathroom rugs",
      "Soap dispensers, shampoo dispensers and tumbler holders",
      "Towel racks, towel rings and bathroom hooks",
      "Toilet tissue holders, toilet brushes and plungers",
      "Floor strainers, waste bins and sanitary bins",
      "Mirrors, hair dryers, holders and vanity trays",
      "Toilet-seat covers, air fresheners and cleaning brushes",
      "Squeegees, slippers and laundry baskets"
    ]
  },
  {
    name: "3. Guest Toiletries & Amenities",
    items: [
      "Guest soaps, shampoos, conditioners and body washes",
      "Body lotions, hand creams and moisturizers",
      "Dental kits, shaving kits, combs and hairbrushes",
      "Shower caps, vanity kits, cotton buds and cotton pads",
      "Hygiene bags, nail kits, sewing kits and shoe-care kits",
      "Loofahs, sponges, washcloths, mouthwash and wet wipes",
      "Guest slippers and travel amenity kits",
      "Refill bottles, jars, pumps, flip-top bottles and sachets",
      "Amenity trays, baskets, holders and dispensers",
      "Labels, seals, tamper caps, amenity boxes and branded packaging"
    ]
  },
  {
    name: "4. Guest Room Accessories & Convenience",
    items: [
      "Electric kettles, hospitality trays and tea-coffee kits",
      "Tea, coffee, sugar and milk sachets",
      "Cups, mugs, saucers, teaspoons and drinking glasses",
      "Water bottles, carafes, ice buckets and bottle openers",
      "Minibar refrigerators and minibar organizers",
      "Wardrobe hangers, luggage racks and mirrors",
      "Room bins, bin liners, tissues and toilet rolls",
      "Notepads, stationery, menus, directories and room folders",
      "Do Not Disturb and Make Up Room signs",
      "Alarm clocks, approved chargers and charging accessories",
      "Umbrellas, ponchos, shoe-cleaning kits and approved repellents",
      "Room fragrances, diffusers, safes and batteries"
    ]
  },
  {
    name: "5. Housekeeping, Cleaning Chemicals & Equipment",
    items: [
      "Floor, tile, stone, toilet and bathroom cleaners",
      "Glass, kitchen, multipurpose and disinfectant cleaners",
      "Wood, metal, carpet, drain and odor-control products",
      "Dishwashing chemicals, laundry chemicals and handwash refills",
      "Brooms, dustpans, mops, handles, mop heads and frames",
      "Buckets, microfiber cloths, pads, sponges and brushes",
      "Squeegees, extension poles, scrapers and cobweb tools",
      "Cleaning caddies, chemical bottles, sprayers and measuring cups",
      "Vacuum cleaners, extractors, scrubbers and floor polishers",
      "Steam cleaners, pressure washers and housekeeping carts",
      "Janitor carts, waste carts and wet-floor caution signs",
      "Protective gloves, chemical storage, dosing tools and cleaning labels"
    ]
  },
  {
    name: "6. Laundry, Linen Care & Dry Cleaning",
    items: [
      "Laundry detergents, fabric softeners and stain removers",
      "Bleach, whiteners, laundry disinfectants and machine cleaners",
      "Descalers, dryer sheets and laundry fragrances",
      "Laundry bags, mesh bags, garment bags and sorting baskets",
      "Laundry hampers, carts, linen tags and barcode labels",
      "Dry-cleaning bags, garment covers, hangers and clips",
      "Folding boards, drying racks, clotheslines, clips and pegs",
      "Irons, steamers, ironing boards and ironing board covers",
      "Commercial washers, dryers, ironing tables and flatwork ironers",
      "Laundry machine filters, hoses, belts and replacement parts",
      "Weighing scales, dosing systems, dispensers and sewing supplies"
    ]
  },
  {
    name: "7. Crockery, Tableware & Food Service",
    items: [
      "Dinner plates, side plates, quarter plates and charger plates",
      "Bowls, platters, serving dishes and food presentation pieces",
      "Porcelain, bone china, ceramic and melamine tableware",
      "Cups, mugs, saucers and espresso cups",
      "Cutlery, serving spoons, tongs and serving utensils",
      "Drinking glasses, pitchers, teapots and milk jugs",
      "Sugar bowls, condiment holders, trays and caddies",
      "Tablecloths, runners, napkins, placemats and coasters",
      "Table skirting, baskets, shakers, jugs and dispensers",
      "Room-service trolleys, tray stands and folding tables",
      "Bill folders, order pads, table-number stands and menu stands",
      "Food covers, insulated carriers, hot boxes and beverage carriers"
    ]
  },
  {
    name: "8. Commercial Kitchen & Food Preparation",
    items: [
      "Commercial gas ranges, burners, induction units and ovens",
      "Fryers, tandoors, rice cookers, steamers and food warmers",
      "Bain-maries, soup kettles and hot-holding cabinets",
      "Commercial refrigerators, freezers and chillers",
      "Mixers, blenders, grinders, food processors and slicers",
      "Toasters, grills, waffle makers, coffee machines and juicers",
      "Stockpots, saucepans, frying pans, woks, kadais and pressure cookers",
      "Bakeware, mixing bowls, colanders, sieves and strainers",
      "Chopping boards, knives, sharpeners, peelers and graters",
      "Whisks, spatulas, tongs, ladles, skimmers and measuring tools",
      "Thermometers, timers, weighing scales, openers and corkscrews",
      "Food containers, GN pans, storage racks, wraps and foil",
      "Commercial dishwashers, racks, grease traps and kitchen filters",
      "Food-safety labels, sanitizers, test strips and covered bins"
    ]
  },
  {
    name: "9. Chef, Restaurant & Staff Uniforms",
    items: [
      "Chef coats, jackets, shirts, trousers and chef hats",
      "Aprons, oven mitts, kitchen gloves and hairnets",
      "Beard nets, neckerchiefs, bandanas and kitchen shoes",
      "Waiter, restaurant, barista and bartender uniforms",
      "Housekeeping, front-office, spa and maintenance uniforms",
      "Security, gardener, bellhop, valet and doorman uniforms",
      "Pool staff, lifeguard and sports uniforms",
      "Rainwear, reflective vests and outdoor jackets",
      "Name badges, logos, ID cards, lanyards and uniform accessories",
      "Buttons, zippers, belts, ties, scarves and bow ties",
      "Uniform laundry bags, garment bags and shoe bags"
    ]
  },
  {
    name: "10. Spa, Salon & Wellness Supplies",
    items: [
      "Massage sheets, bed rolls, towels, robes and headbands",
      "Hair wraps, slippers, gowns and disposable spa wear",
      "Disposable caps, masks, gloves and face-cradle covers",
      "Massage oils, lotions, creams, scrubs and facial products",
      "Face masks, bath salts, foot creams and hand creams",
      "Waxing strips, wax heaters, cotton, tissues and spatulas",
      "Treatment bowls, brushes, hot stones and bolsters",
      "Massage tables, spa beds, stools, trolleys and towel cabinets",
      "Towel warmers, approved sterilization equipment and facial steamers",
      "Magnifying lamps, pedicure chairs, manicure tables and nail tools",
      "Hair tools, shampoo supplies, mirrors and storage",
      "Relaxation beds, recliners, lockers, robe hooks and privacy screens",
      "Spa dispensers, labels, gift sets, diffusers and welcome trays"
    ]
  },
  {
    name: "11. Swimming Pool & Outdoor Leisure",
    items: [
      "Pool towels, loungers, cushions and sunbeds",
      "Parasols, umbrella bases, side tables and deck chairs",
      "Outdoor seating, furniture covers and towel racks",
      "Pool floats, kickboards and approved leisure accessories",
      "Lifebuoys, rescue hooks, reaching poles and life jackets",
      "Pool depth markers, pool rules and safety signs",
      "Water testing kits, pool nets, skimmers and brushes",
      "Pool vacuum heads, pumps, filters and replacement parts",
      "Pool covers, reels, maintenance accessories and pool chemicals",
      "Outdoor showers, foot-rinse stations and changing accessories",
      "Garden furniture, hoses, watering cans and outdoor bins",
      "Outdoor lighting, badminton sets and recreational games"
    ]
  },
  {
    name: "13. Fire Safety, Emergency & First Aid",
    items: [
      "Fire extinguishers, brackets, fire blankets and fire hoses",
      "Fire hose reels, buckets, detectors and alarm accessories",
      "Exit signs, emergency lights and evacuation maps",
      "Fire-action notices, cabinets, inspection tags and safety signs",
      "First-aid kits, refills, bandages and wound dressings",
      "Medical tape, scissors, tweezers, eyewash and burn dressings",
      "Cold packs, emergency blankets, torches and batteries",
      "Whistles, megaphones, emergency contact boards and safety vests",
      "Cones, barrier tape, barricades, spill kits and protective equipment"
    ]
  },
  {
    name: "14. Electrical, Lighting & Maintenance",
    items: [
      "LED bulbs, tube lights, panels, downlights and lamps",
      "Night lights, emergency lights and outdoor lighting",
      "Approved switches, sockets, plugs, cables and extension boards",
      "Surge protectors, adapters, batteries and approved chargers",
      "Fans, AC filters, remotes and maintenance accessories",
      "Water-heater and kettle replacement parts",
      "Doorbells, cable ties, electrical tape and cable organizers",
      "Screwdrivers, drivers, connectors, transformers and tools",
      "Fasteners, hinges, door closers, door stops and furniture glides",
      "Drawer handles, sealants, adhesives, paint and painting tools"
    ]
  },
  {
    name: "15. Plumbing, Water Systems & Fittings",
    items: [
      "Taps, faucets, mixers and replacement cartridges",
      "Showers, shower hoses, holders and flexible hoses",
      "Connectors, washers, O-rings, pipes and pipe fittings",
      "Floor drains, drain covers, strainers and flush valves",
      "Flush buttons, cistern fittings, toilet seats and hinges",
      "Washbasins, sink accessories, traps and plungers",
      "Drain snakes, plumbing tools and PTFE tape",
      "Water hoses, clamps, tanks, floats and valves",
      "Water filters, cartridges, filter housings and dispensers",
      "Pump accessories, pressure gauges and leak-detection supplies",
      "Water-saving showerheads, aerators and flow-control accessories",
      "Water-testing supplies and descaling products"
    ]
  },
  {
    name: "16. Furniture, Decor & Interior",
    items: [
      "Beds, bed frames, headboards, bunk beds and mattresses",
      "Bedside tables, desks, dressing tables and wardrobes",
      "Cabinets, drawers, dining tables, coffee tables and side tables",
      "Sofas, armchairs, lounge chairs, ottomans and stools",
      "Benches, folding chairs and outdoor furniture",
      "Furniture covers, mirrors, frames and wall art",
      "Blackout curtains, sheer curtains, rods, tracks and hooks",
      "Blinds, tiebacks, rugs, runners and anti-slip mats",
      "Kitchen mats, fatigue mats, cushions, throws and sofa covers",
      "Lampshades, decorative lighting, plants, planters and vases",
      "Clocks, organizers, trays, luggage racks and room dividers",
      "Floor protectors, upholstery fabric and furniture repair supplies"
    ]
  },
  {
    name: "17. Front Office, Reception & Administration",
    items: [
      "Reception desks, office chairs and visitor seating",
      "Key cabinets, key tags, key rings and key-card holders",
      "Compatible key cards, electronic locks and lock accessories",
      "Reception bells, queue systems and token dispensers",
      "Registers, forms, logbooks, reservation books and checklists",
      "Feedback books, complaint books and suggestion boxes",
      "Invoices, receipts, cash drawers and bill folders",
      "Paper, envelopes, folders, pens and office stationery",
      "Filing systems, cabinets, storage and document organizers",
      "Computers, monitors, printers, scanners and copier supplies",
      "Barcode scanners, label printers, POS supplies and thermal paper",
      "Routers, Wi-Fi equipment, office phones, headsets and UPS units",
      "Digital signage, room directories, maps, rate cards and nameplates"
    ]
  },
  {
    name: "18. Security, Access & Guest Protection",
    items: [
      "CCTV cameras, recorders, storage and mounting accessories",
      "Camera housings, cables and compatible surveillance accessories",
      "Access-control readers, keypads and door accessories",
      "Door viewers, security chains and room safes",
      "Torches, walkie-talkies and compatible chargers",
      "Security badges, lanyards, registers and incident logbooks",
      "Patrol logs, queue barriers, stanchions and warning signs",
      "Lockers, key boxes and restricted-area signs",
      "Reflective vests, rainwear and security accessories",
      "Anti-slip strips, window locks, child-safety products and emergency boards"
    ]
  },
  {
    name: "19. Bar, Beverage & Restaurant Accessories",
    items: [
      "Bar staff uniforms and aprons",
      "Wine, champagne, cocktail and beer glasses",
      "Cocktail shakers, jiggers, strainers, bar spoons and muddlers",
      "Bottle openers, corkscrews, ice tools and ice buckets",
      "Beverage dispensers, pitchers, stirrers and straws",
      "Garnish trays, condiment bottles, caddies and pourers",
      "Speed rails, bar mats, wine chillers and bottle stands",
      "Coffee filters, tampers, espresso accessories and milk pitchers",
      "Knock boxes, tea strainers, infusers and teapots",
      "Cocktail napkins, coasters, menus and wine lists",
      "Stock labels, glass brushes, glass racks and glass washers"
    ]
  },
  {
    name: "20. Events, Banquets & Celebrations",
    items: [
      "Banquet tables, chairs, chair covers and sashes",
      "Tablecloths, table skirting, buffet tables and display stands",
      "Stages, podiums, backdrops, partitions and red carpets",
      "Easels, signage, flower arrangements and decorative accessories",
      "Chafing dishes, food warmers, carriers, trays and racks",
      "Tea and coffee stations, service trolleys and registration desks",
      "Queue systems, name cards, table numbers, wristbands and badges",
      "Microphones, speakers, projectors, screens and AV cables",
      "Event lighting, notepads, flipcharts, fans and waste bins",
      "Banners, balloons, non-explosive festive lights and gift packaging",
      "Wedding decor, seasonal decor, welcome kits and celebration trays"
    ]
  },
  {
    name: "21. Disposable Products & Takeaway Packaging",
    items: [
      "Paper cups, lids, cup sleeves, plates, bowls and trays",
      "Food containers, takeaway boxes, bags and napkins",
      "Tissues, paper towels, aluminium foil and cling film",
      "Baking paper, food wraps, portion cups and lids",
      "Wooden stirrers, toothpicks and compliant disposable cutlery",
      "Sauce cups, sachets and condiment packaging",
      "Disposable gloves, hairnets, aprons and caps",
      "Protective table covers and disposable sheets",
      "Garbage bags, packing tape, stretch wrap and bubble wrap",
      "Cartons, shipping labels, thermal labels and sealing supplies",
      "Food-delivery thermal bags and dispensing systems"
    ]
  },
  {
    name: "22. Waste Management & Hygiene",
    items: [
      "Pedal bins, swing bins, open bins and sensor bins",
      "Room, bathroom, desk, kitchen and outdoor bins",
      "Wet-dry segregation bins, recycling bins and labels",
      "Bin liners, heavy-duty sacks and waste bags",
      "Cardboard, bottle and recycling collection bins",
      "Waste carts, wheelie bins and sorting signs",
      "Sanitary disposal bins and suitable regulated-waste supplies",
      "Ashtrays, food-waste bins and compost bins",
      "Handwash stations, soap dispensers and paper-towel dispensers",
      "Touch-free dispensers, sanitizer stands and handwash refills",
      "Odor-control products, entrance mats and dirt-control mats"
    ]
  },
  {
    name: "23. Pest Control & Property Sanitation",
    items: [
      "Insect light traps, replacement bulbs and fly screens",
      "Fly swatters, approved traps and glue boards",
      "Mosquito nets, mesh screens and door seals",
      "Rodent monitoring supplies and approved pest-control products",
      "Bait-station signs, service logs and monitoring labels",
      "Food-safe storage bins, drain covers and door sweeps",
      "Cockroach monitoring products and outdoor mosquito equipment",
      "Protective equipment for approved pest-control work"
    ]
  },
  {
    name: "24. Drinking Water & Beverage Stations",
    items: [
      "Water dispensers, drip trays and water coolers",
      "Bottle stands, bottle racks and storage accessories",
      "Reusable bottles, carafes, jugs and pitchers",
      "Beverage dispensers, filter cartridges and compatible pumps",
      "Refill stations, drinking cups and cup holders",
      "Tea and coffee trays, tea, coffee and sugar supplies",
      "Hot-water urns, beverage warmers and ice machines",
      "Cleaning accessories, water-testing supplies and descalers"
    ]
  },
  {
    name: "25. Staff Rooms & Employee Facilities",
    items: [
      "Staff lockers, keys, locker plates and storage cabinets",
      "Benches, shoe racks, tables, chairs and noticeboards",
      "Staff uniforms, aprons, badges and laundry baskets",
      "Hangers, attendance registers, rosters and time-clock supplies",
      "Water dispensers, cups, lunch boxes and food containers",
      "Fridge organizers, microwaves, kettles and pantry supplies",
      "Soap, paper towels, mirrors, hooks and storage baskets",
      "Shoe brushes, first-aid supplies, safety signs and stationery",
      "Cleaning supplies, waste bins and pantry accessories"
    ]
  },
  {
    name: "26. Garden, Landscaping & Outdoor Maintenance",
    items: [
      "Gardening gloves, pruners, shears and spades",
      "Shovels, hoes, rakes, trowels and garden tools",
      "Hoses, hose reels, connectors, sprinklers and watering cans",
      "Garden sprayers, lawn mowers, trimmers and leaf blowers",
      "Garden bags, wheelbarrows and utility carts",
      "Planters, pots, stands, benches and outdoor tables",
      "Outdoor chairs, cushions, covers and parasols",
      "Edging, plant ties, plant labels and compost bins",
      "Outdoor brooms, pressure-washing and drain-cleaning tools",
      "Pathway lights, solar lights and weatherproof electrical accessories",
      "Outdoor signage, waste bins and ashtrays"
    ]
  },
  {
    name: "27. Hotel Transport, Valet & Luggage",
    items: [
      "Luggage carts, bell carts, luggage racks and luggage tags",
      "Claim tickets, storage labels and baggage accessories",
      "Valet tags, key cabinets and key-management accessories",
      "Traffic cones, barriers, reflective vests and parking signs",
      "Wheel stoppers, umbrellas, raincoats and protective covers",
      "Vehicle cleaning cloths, glass cleaners and interior cleaners",
      "Buckets, brushes, vehicle mats and seat covers",
      "Vehicle first-aid supplies, torches and driver uniforms",
      "Gloves, badges, lanyards, trip logs and inspection records",
      "Tyre inflators and suitable vehicle-maintenance accessories",
      "Shuttle-service signs and transport accessories"
    ]
  },
  {
    name: "28. Children, Family & Baby Amenities",
    items: [
      "Baby cots, travel cots, mattresses and cot sheets",
      "Baby blankets, mattress protectors and high chairs",
      "Booster seats, feeding accessories and baby baths",
      "Baby towels, washcloths, robes and changing mats",
      "Nappy bins, disposal bags and baby toiletries",
      "Child-friendly crockery and family welcome kits",
      "Corner guards, cabinet locks and bed guards",
      "Strollers, children's books, puzzles and coloring supplies",
      "Age-appropriate toys and play accessories"
    ]
  },
  {
    name: "29. Technology, Smart Rooms & Connectivity",
    items: [
      "Televisions, TV mounts, remotes, cables and adapters",
      "Charging stations and multi-device charging accessories",
      "Routers, wireless access points, network cables and switches",
      "Room telephones, compatible electronic locks and key cards",
      "Thermostats, room controls and occupancy sensors",
      "Door sensors, smart plugs and compatible automation accessories",
      "Digital signage, printer supplies and network accessories",
      "UPS units, batteries, surge protection and cable management",
      "Device stands and room-connectivity accessories"
    ]
  },
  {
    name: "30. Office, Accounts & Inventory Supplies",
    items: [
      "Purchase-order books, requisition forms and stock registers",
      "Goods-received records, delivery books and invoice folders",
      "Inventory labels, bin labels, barcodes and label printers",
      "Scanners, pens, paper, notebooks, registers and diaries",
      "Calendars, files, folders and clipboards",
      "Staplers, hole punches, clips, scissors, rulers and tape",
      "Glue, toner, cash boxes, receipt books and calculators",
      "Desk organizers, cabinets, storage racks and noticeboards",
      "Whiteboards, shredders, laminators and binders",
      "Visitor registers, courier registers and dispatch books"
    ]
  },
  {
    name: "31. Building Repair, Painting & Maintenance",
    items: [
      "Toolkits, screwdrivers, spanners, pliers and cutters",
      "Hammers, wrenches, measuring tapes, levels and torches",
      "Drills, drill bits, fasteners, hinges, handles and locks",
      "Latches, door closers, stops, buffers and furniture protectors",
      "Cabinet hardware, drawer hardware and repair accessories",
      "Adhesives, tapes, sealants, fillers and compounds",
      "Paints, primers, rollers, brushes, trays and masking tape",
      "Sandpaper, putty knives, scrapers and caulking supplies",
      "Weatherproofing, wall fillers, grout and tile spacers",
      "Plumbing tools, electrical supplies, LED lights and AC filters",
      "Door seals, window seals, mosquito mesh and drain tools",
      "Ladders, step stools, tool storage, spare parts and protective equipment",
      "Maintenance checklists, asset labels and service records"
    ]
  },
  {
    name: "32. Lobby, Entrance & Public Areas",
    items: [
      "Entrance mats, logo mats and dirt-control mats",
      "Lobby furniture, reception accessories and bell stands",
      "Brochure holders, umbrella stands and luggage carts",
      "Planters, vases, greenery and decorative accessories",
      "Waste bins, recycling bins, tissue dispensers and sanitizer stands",
      "Air fresheners, signs, elevator signs and floor-number signs",
      "Queue barriers, public seating, clocks and information displays",
      "Cleaning carts, vacuums and floor-care supplies",
      "Public washroom dispensers, sanitary bins and carpet replacement supplies"
    ]
  },
  {
    name: "33. Dining Consumables, Breakfast & Pantry",
    items: [
      "Tea, coffee, green tea, herbal tea and hot chocolate",
      "Sugar, sweeteners, milk powder and approved beverage supplies",
      "Seasonings, condiments, jam, honey and portion spreads",
      "Biscuits, snacks, minibar snacks and packaged beverages",
      "Breakfast cereals, oats, portion cups and dispensers",
      "Food labels, batch labels, expiry labels and rotation supplies",
      "Pantry jars, scoops, food-storage containers and organizers",
      "Tea strainers, coffee filters and beverage accessories",
      "Disposable cups, stirrers, napkins, lids and food packaging",
      "Food-storage and pantry hygiene supplies"
    ]
  },
  {
    name: "34. Eco-Friendly & Reusable Hospitality",
    items: [
      "Reusable water bottles, carafes and refillable toiletry bottles",
      "Reusable cups, mugs, straws and food containers",
      "Washable microfiber cloths and reusable mop heads",
      "Reusable laundry bags, shopping bags and takeaway containers",
      "Recycled-paper stationery and tissue products",
      "Recyclable cartons and certified compostable products",
      "Reusable linen, tablecloths and napkins",
      "Recycling bins and compost bins",
      "Refillable cleaning chemical systems",
      "Water-saving aerators, showerheads, LED lights and occupancy sensors",
      "Durable, repairable hospitality equipment"
    ]
  },
  {
    name: "35. Religious, Cultural & Seasonal Supplies",
    items: [
      "Prayer mats, storage accessories and suitable garments",
      "Directional signs and shoe racks",
      "Battery lanterns and permitted decorative candles",
      "Flowers, garlands, rangoli and festival decorations",
      "Festival banners, decorative LEDs and gift packaging",
      "Celebration trays, table decorations and welcome kits",
      "Wedding decor, festival decor and seasonal room accessories"
    ]
  },
  {
    name: "36. Villas, Cottages & Homestay Supplies",
    items: [
      "Outdoor and balcony furniture, cushions and furniture covers",
      "Weatherproof storage, umbrellas and mosquito nets",
      "Rainwear, boot trays and suitable outdoor accessories",
      "Compliant heaters, fans and fireplace accessories where applicable",
      "Kitchen starter kits, washing machines and drying accessories",
      "Extra bedding, irons, ironing boards and laundry supplies",
      "Board games, torches, first-aid supplies and safety signs",
      "Property signs, driveway markers and outdoor bins",
      "Garden tools, welcome trays and local information materials",
      "Barbecue tools where permitted and suitable for the property"
    ]
  },
  {
    name: "37. Larger Capital Equipment — Available on Enquiry",
    items: [
      "Commercial refrigeration, freezers and cold-storage equipment",
      "Commercial ovens, ranges, fryers and kitchen production lines",
      "Commercial dishwashers and glass washers",
      "Industrial laundry washers, dryers and ironing equipment",
      "Industrial vacuum cleaners and floor scrubbers",
      "Water dispensers, treatment systems and water heaters",
      "Boilers, HVAC equipment and commercial coffee machines",
      "Ice machines, stainless-steel kitchen benches and sinks",
      "Commercial shelving, preparation machines and buffet counters",
      "Banquet furniture, spa equipment, gym equipment and pool equipment",
      "CCTV systems, networking equipment and access-control systems",
      "Commercial beds, mattresses, wardrobes and waste carts"
    ]
  },
  {
    name: "38. Spare Parts & Replacement Accessories",
    items: [
      "Mop heads, frames, handles, vacuum bags and filters",
      "Vacuum hoses, attachments, scrubber pads and brushes",
      "Spray triggers, caps, nozzles, pumps and dispenser brackets",
      "Refill bottles, soap pumps and tissue-dispenser components",
      "Kettle parts, hanger clips, hooks and curtain hardware",
      "Pillow zippers, linen labels, sewing supplies and ironing-board covers",
      "Door-lock batteries, compatible key cards and replacement bulbs",
      "Electrical connectors, LED drivers and tap washers",
      "Shower hoses, seals, cartridges and flush components",
      "Furniture glides, hinges, drawer hardware and cart wheels",
      "Bin lids, bin wheels, pedals, label rolls and printer supplies",
      "Pool brush heads, laundry filters, AC filters and remotes"
    ]
  },
  {
    name: "39. Guest Welcome Gifts & Promotional Supplies",
    items: [
      "Gift hampers, baskets, gift boxes and presentation packaging",
      "Branded mugs, water bottles, travel cups and notebooks",
      "Promotional pens, tote bags, drawstring bags and reusable bags",
      "Branded towels, robes, slippers and amenity packaging",
      "Amenity holders, welcome cards and thank-you cards",
      "Feedback cards, local guides, maps and brochures",
      "Branded umbrellas, ponchos and suitable souvenirs",
      "Birthday, anniversary and honeymoon room decorations",
      "Celebration trays, presentation boxes and loyalty cards",
      "Promotional cards, QR display stands and guest-review stands",
      "Branded uniforms, aprons and name badges"
    ]
  },
  {
    name: "40. Workplace Safety, Hygiene & Compliance",
    items: [
      "Safety goggles, gloves, face shields, masks and protective clothing",
      "Non-slip footwear, ear protection and chemical-resistant gloves",
      "Protective aprons, cones, barrier tape and caution signs",
      "Wet-floor signs, first-aid supplies and emergency accessories",
      "Exit signs, assembly-point signs and fire-safety accessories",
      "Chemical labels, safety-data-sheet holders and spill kits",
      "Handwashing supplies and food-hygiene accessories",
      "Temperature logs, cleaning schedules and inspection checklists",
      "Waste-segregation signs, pool rules and emergency information boards"
    ]
  }
];

// Build the category cards from the catalogue data.
const catalogueContainer = document.getElementById("catalogue-categories");
const productSearch = document.getElementById("product-search");
const resultsCount = document.getElementById("search-results-count");
const noResults = document.getElementById("no-results");

function renderCatalogue() {
  if (!catalogueContainer) return;

  const fragment = document.createDocumentFragment();

  catalogueData.forEach((category) => {
    const card = document.createElement("details");
    card.className = "catalogue-category";

    const heading = document.createElement("summary");
heading.className = "catalogue-heading";

const title = document.createElement("span");
title.className = "catalogue-title";
title.textContent = category.name;

const plus = document.createElement("span");
plus.className = "catalogue-plus";
plus.setAttribute("aria-hidden", "true");
plus.textContent = "+";

heading.appendChild(title);
heading.appendChild(plus);

    const list = document.createElement("ul");
    list.className = "catalogue-items";

    category.items.forEach((product) => {
      const item = document.createElement("li");
      item.textContent = product;
      list.appendChild(item);
    });

    card.appendChild(heading);
    card.appendChild(list);
    fragment.appendChild(card);
  });

  catalogueContainer.replaceChildren(fragment);
}

// Search across category names and product descriptions.
function searchCatalogue() {
  if (!catalogueContainer || !productSearch) return;

  const query = productSearch.value.trim().toLowerCase();
  const cards = catalogueContainer.querySelectorAll(".catalogue-category");
  let visibleCategories = 0;
  let matchingProducts = 0;

  cards.forEach((card, index) => {
    const category = catalogueData[index];
    const categoryMatches = category.name.toLowerCase().includes(query);
    const matchingItems = category.items.filter((product) =>
      product.toLowerCase().includes(query)
    );

    const matches = query === "" || categoryMatches || matchingItems.length > 0;

    card.hidden = !matches;

    if (matches) {
      visibleCategories++;

      if (query === "" || categoryMatches) {
        matchingProducts += category.items.length;
      } else {
        matchingProducts += matchingItems.length;
      }

      if (query !== "") {
        card.open = true;

        card.querySelectorAll(".catalogue-items li").forEach((item) => {
          const productMatches = item.textContent.toLowerCase().includes(query);
          item.hidden = !categoryMatches && !productMatches;
        });
      } else {
        card.open = false;
        card.querySelectorAll(".catalogue-items li").forEach((item) => {
          item.hidden = false;
        });
      }
    }
  });

  if (resultsCount) {
    if (query === "") {
      resultsCount.textContent =
        `Explore ${catalogueData.length} product categories. Select a category to view its products.`;
    } else {
      resultsCount.textContent =
        `${matchingProducts} matching product entries across ${visibleCategories} categories.`;
    }
  }

  if (noResults) {
    noResults.hidden = visibleCategories !== 0;
  }
}

// Smoothly navigate to sections when visitors click navigation links.
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");

    if (!targetId || targetId === "#") {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const target = document.querySelector(targetId);

    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Initialize catalogue and connect the search box.
renderCatalogue();

if (productSearch) {
  productSearch.addEventListener("input", searchCatalogue);
}

searchCatalogue();
