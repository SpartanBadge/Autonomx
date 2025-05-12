/*
  # Fix bookings table creation
  
  1. New Tables
    - `bookings`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `services` (text array)
      - `company_name` (text)
      - `company_website` (text, nullable)
      - `selected_date` (date, nullable)
      - `selected_time` (text, nullable)
      - `description` (text, nullable)
      - `want_call` (boolean, default true)
      - `created_at` (timestamptz, default now())
  
  2. Security
    - Enable RLS on bookings table
    - Note: Policy already exists, so not recreating it
*/

-- Create the bookings table
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

-- Enable Row Level Security
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;