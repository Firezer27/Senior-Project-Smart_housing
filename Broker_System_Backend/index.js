const express = require('express')
const userRoutes=require("./routes/user.route.js")
const connectDB=require("./config/db.config.js")
const authRoutes=require("./routes/auth.route.js")
const roleRoutes=require("./routes/role.route.js")
const cors=require('cors');
const app = express()
connectDB();

app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.use(cors({
  origin: 'http://localhost:3001', 
  methods: ['GET', 'POST','PUT','DELETE'], 
}));

app.use('/api/user',userRoutes);
app.use("/api/auth", authRoutes);
app.use('/api/roles', roleRoutes);
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
