import { createClient } from '@supabase/supabase-js';
require('dotenv').config();

const supabaseUrl = 'https://mavwqeepkngeifpmkmxz.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1hdndxZWVwa25nZWlmcG1rbXh6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzkzNzcyNTIsImV4cCI6MTk5NDk1MzI1Mn0.J28q5jpo5U65nlCu-mYnaPPPXLHvpPurUNV9Jz1B_Dk';

export const supabase = createClient(supabaseUrl, supabaseKey);
