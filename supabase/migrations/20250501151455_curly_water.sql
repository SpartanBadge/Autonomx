/*
  # Create bookings table
  
  1. New Tables
    - `bookings`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `services` (text[])
      - `company_name` (text)
      - `company_website` (text)
      - `selected_date` (date)
      - `selected_time` (text)
      - `description` (text)
      - `want_call` (boolean)
      - `created_at` (timestamp)
  
  2. Security
    - Enable RLS on `bookings` table
    - Add policy for authenticated users to insert data
*/

CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  services text[] NOT NULL,
  company_name text NOT NULL,
  company_website text,
  selected_date date,
  selected_time text,
  description text,
  want_call boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public to insert bookings"
  ON bookings
  FOR INSERT
  TO public
  WITH CHECK (true);