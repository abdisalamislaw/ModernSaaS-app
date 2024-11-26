import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ermkukzyxmfonnbdywme.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVybWt1a3p5eG1mb25uYmR5d21lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIzODk1NTYsImV4cCI6MjA0Nzk2NTU1Nn0.jkPt6DUBPCRWODpBoh49pfwpJbmwSpYNrjTUx_iKWlU';

export const supabase = createClient(supabaseUrl, supabaseKey);