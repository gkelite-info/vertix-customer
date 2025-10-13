import type { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '../../../lib/supabaseClient'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Query something simple — list of tables in the DB
    const { data, error } = await supabase.from('pg_tables').select('tablename').limit(1)

    if (error) {
      return res.status(500).json({ message: '❌ Connection failed', error: error.message })
    }

    res.status(200).json({ message: '✅ Supabase connected successfully!', data })
  } catch (err: any) {
    res.status(500).json({ message: '❌ Unexpected error', error: err.message })
  }
}
