// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

// Here we create an interface telling
// TypeScript what information it can
// expect from our API
export interface HelloWorldData {
  text: string
}

// This is the function representing our
// backend API.
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<HelloWorldData>
) {
  res.status(200).json({ 
    text: 'Hello world from your API!' 
  })
}
