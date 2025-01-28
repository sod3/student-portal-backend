const connectDB = async () => {
  if (mongoose.connection.readyState === 0) {
    try {
      await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('Database connected successfully');
    } catch (error) {
      console.error('Database connection failed:', error.message);
    }
  }
};

// Connect to the database in the Vercel function
export default async (req, res) => {
  await connectDB();
  app(req, res);
};
