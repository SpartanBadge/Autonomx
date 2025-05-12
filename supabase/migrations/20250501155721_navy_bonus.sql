/*
  # Create contact messages table

  1. New Tables
    - `contact_messages`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `email` (text, required)
      - `message` (text, required)
      - `selected_date` (date, optional)
      - `selected_time` (text, optional)
      - `created_at` (timestamp with time zone)

  2. Security
    - Enable RLS on `contact_messages` table
    - Add policy for public inserts
*/

-- Create the contact_messages table
CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  selected_date date,
  selected_time text,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public inserts
CREATE POLICY "Allow public to insert contact messages"
  ON contact_messages
  FOR INSERT
  TO public
  WITH CHECK (true);