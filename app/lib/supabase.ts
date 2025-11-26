import 'react-native-url-polyfill/auto';
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://qshjuowuhvqyffanchaf.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFzaGp1b3d1aHZxeWZmYW5jaGFmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQxODE3MDQsImV4cCI6MjA3OTc1NzcwNH0.SsPNLmfCa_dZJzF37TcVat7VhIFd_0MVfvCakPM4KHo';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);