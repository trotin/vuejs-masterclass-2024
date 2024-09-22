import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  'https://eurfaravdtigxnfkkuux.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV1cmZhcmF2ZHRpZ3huZmtrdXV4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY5NjQ3ODYsImV4cCI6MjA0MjU0MDc4Nn0.2vbsX_QCPD634VHK0D6J9QwDnE0ZeOA7ESvU5VMMybQ'
)
