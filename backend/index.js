const express = require("express")
const app = express()

const dogs = [
	{
		id: 1,
		name: "Tiki",
		breed: "Chihuahua",
		price: "1000",
		description: "This is a crazy dog tiny dog with big alien eyes",
		imageUrl: 
		"https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
		
	},
	{
		id: 2,
		name: "Tiki2",
		breed: "Chihuahua2",
		price: "1500",
		description: "This is cute dog with a heart-shaped butt",
		imageUrl: 
		"https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
		
	}
]
app.get("/v1/dogs", (req, res) => {
	// res.send('hello')
	res.status(200).json(dogs)
})
app.listen("8080", () => {
	console.log('backend is running...')
})