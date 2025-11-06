# ScholarConnect Setup Guide

## Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Supabase account (optional, for database)
- OpenAI API key (optional, for chatbot)

## Installation

1. **Install Dependencies**
   ```bash
   cd scholar-connect-online
   npm install
   ```

2. **Set Up Environment Variables**
   
   Create a `.env` file in the root directory:
   ```env
   # Supabase Configuration (Optional - will use localStorage if not provided)
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

   # OpenAI Configuration (Optional - chatbot won't work without this)
   VITE_OPENAI_API_KEY=your_openai_api_key
   ```

3. **Set Up Supabase Database (Optional)**
   
   If you want to use Supabase instead of localStorage:
   
   a. Create a new project at [supabase.com](https://supabase.com)
   
   b. Go to SQL Editor in your Supabase dashboard
   
   c. Run the SQL script from `supabase-schema.sql` to create tables and sample data
   
   d. Get your project URL and anon key from Settings > API
   
   e. Add them to your `.env` file

4. **Get OpenAI API Key (Optional)**
   
   a. Sign up at [platform.openai.com](https://platform.openai.com)
   
   b. Create an API key
   
   c. Add it to your `.env` file

## Running the Application

```bash
npm run dev
```

The application will be available at `http://localhost:8080`

## Features

- ✅ **3D UI Effects**: Modern 3D textures, lighting effects, and glass morphism
- ✅ **AI Chatbot**: OpenAI-powered assistant (requires API key)
- ✅ **Database Support**: Supabase/PostgreSQL with localStorage fallback
- ✅ **User Authentication**: Sign up and login functionality
- ✅ **Course Management**: Browse, search, and filter courses
- ✅ **Responsive Design**: Works on all devices

## Database Options

### Option 1: Supabase (Recommended for Production)
- Set up Supabase project
- Run the SQL schema
- Add credentials to `.env`

### Option 2: localStorage (Default)
- Works out of the box
- No setup required
- Data persists in browser
- Limited to single device

## Notes

- The application will automatically use localStorage if Supabase credentials are not provided
- The chatbot requires an OpenAI API key to function
- All previous localStorage data will be preserved unless you clear it manually
- The database schema includes sample courses that will be inserted automatically

## Troubleshooting

1. **Chatbot not working**: Check that `VITE_OPENAI_API_KEY` is set correctly
2. **Database errors**: Verify Supabase credentials and that tables are created
3. **Build errors**: Run `npm install` again to ensure all dependencies are installed

