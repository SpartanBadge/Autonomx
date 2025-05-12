/*
  # Create bookings table
  
  1. New Tables
    - `bookings`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `email` (text, required)
      - `services` (text array, required)
      - `company_name` (text, required)
      - `company_website` (text, optional)
      - `selected_date` (date, optional)
      - `selected_time` (text, optional)
      - `description` (text, optional)
      - `want_call` (boolean, defaults to true)
      - `created_at` (timestamptz, defaults to now)
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