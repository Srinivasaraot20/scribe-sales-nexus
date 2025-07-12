-- Insert sample books data
INSERT INTO public.books (
  title,
  subtitle,
  author_id,
  publisher_id,
  category,
  price,
  vendor_price,
  description,
  cover_image_url,
  isbn,
  pages,
  language,
  stock_quantity,
  is_active
) VALUES 
-- UPSC Books
(
  'Disha 31 Topic-wise UPSC Civil Services IAS Prelims Previous Year Solved Papers 1 & 2 (1995 - 2025)',
  '16th Edition | General Studies & Aptitude (CSAT) PYQs Question Bank for 2026 Exam',
  (SELECT id FROM profiles WHERE role = 'author' LIMIT 1),
  (SELECT id FROM profiles WHERE role = 'publisher' LIMIT 1),
  'upsc',
  799.00,
  650.00,
  'Comprehensive UPSC preparation book with 31 years of solved papers covering General Studies and CSAT. Includes detailed explanations and topic-wise categorization for systematic preparation.',
  '/src/assets/books/upsc-1.jpg',
  '9362258951',
  1200,
  'English',
  50,
  true
),
(
  'Indian Polity (English) by M Laxmikanth for UPSC CSE 2025',
  '7th edition (latest) | Civil Services Exam - Prelims, Mains and Interview',
  (SELECT id FROM profiles WHERE role = 'author' LIMIT 1),
  (SELECT id FROM profiles WHERE role = 'publisher' LIMIT 1),
  'upsc',
  650.00,
  520.00,
  'The most trusted book for Indian Polity preparation. Covers all aspects of Indian Constitution, political system, and governance with latest updates.',
  '/src/assets/books/upsc-3.jpg',
  '9355325347',
  800,
  'English',
  75,
  true
),
(
  'GS 1 - UPSC Civil Services IAS Mains Previous Years (2024-2013) Topic Wise Solved Question Papers',
  'By Dr. Navjot Simi IPS & Tushar Singla IAS | UPSC GUIDE',
  (SELECT id FROM profiles WHERE role = 'author' LIMIT 1),
  (SELECT id FROM profiles WHERE role = 'publisher' LIMIT 1),
  'upsc',
  450.00,
  360.00,
  'Comprehensive collection of UPSC Mains GS-1 previous years questions with detailed solutions and explanations by expert authors.',
  '/src/assets/books/upsc-4.jpg',
  '8196424167',
  600,
  'English',
  40,
  true
),

-- JEE Books
(
  '45000+ MCQs For JEE 2024 With Full Solutions',
  'Full Set Of 12 Books For Maths, Physics And Chemistry',
  (SELECT id FROM profiles WHERE role = 'author' LIMIT 1),
  (SELECT id FROM profiles WHERE role = 'publisher' LIMIT 1),
  'jee',
  2999.00,
  2400.00,
  'Comprehensive JEE preparation package with over 45000 multiple choice questions covering Mathematics, Physics, and Chemistry with detailed solutions.',
  '/src/assets/books/jee-1.jpg',
  '9780000000001',
  3000,
  'English',
  30,
  true
),

-- NEET Books
(
  'Arihant NEET Objective Physics Volume 1',
  'NEET Practice Set | With Modular Theory & Exercise MCQ Practice with PYQs',
  (SELECT id FROM profiles WHERE role = 'author' LIMIT 1),
  (SELECT id FROM profiles WHERE role = 'publisher' LIMIT 1),
  'neet',
  599.00,
  480.00,
  'Comprehensive NEET Physics preparation book with objective questions, modular theory, and extensive practice exercises including previous year questions.',
  '/src/assets/books/neet-1.jpg',
  '936840254X',
  750,
  'English',
  60,
  true
),

-- Computer Science Books
(
  'Computer Networking, 8e',
  'Latest Edition by Pearson',
  (SELECT id FROM profiles WHERE role = 'author' LIMIT 1),
  (SELECT id FROM profiles WHERE role = 'publisher' LIMIT 1),
  'academic',
  850.00,
  680.00,
  'Comprehensive guide to computer networking concepts, protocols, and technologies. Covers latest developments in networking field with practical examples.',
  '/src/assets/books/cs-1.jpg',
  '9356061319',
  900,
  'English',
  45,
  true
);

-- Insert sample authors (if profiles don't exist)
INSERT INTO public.profiles (user_id, full_name, email, role, phone, address, city, state, pincode)
SELECT 
  gen_random_uuid(),
  'Dr. Navjot Simi',
  'navjot.simi@example.com',
  'author',
  '+91-9876543210',
  '123 Author Street',
  'Delhi',
  'Delhi',
  '110001'
WHERE NOT EXISTS (SELECT 1 FROM profiles WHERE role = 'author');

INSERT INTO public.profiles (user_id, full_name, email, role, phone, address, city, state, pincode)
SELECT 
  gen_random_uuid(),
  'Academic Publishers Ltd',
  'publisher@example.com',
  'publisher',
  '+91-9876543211',
  '456 Publisher Avenue',
  'Mumbai',
  'Maharashtra',
  '400001'
WHERE NOT EXISTS (SELECT 1 FROM profiles WHERE role = 'publisher');