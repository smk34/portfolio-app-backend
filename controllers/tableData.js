exports.getTableData = (req, res) => {
    const portfolioData = [
    
                {
                    Scrip: "AADR",
                    Quantity: 430,
                    Price: "$50.30",
                    Avg_Cost: "$41.75",
                    Invested_Amount: "$17,952.07",
                    Portfolio_Value: "22.06%",
                    Unrealized_P_L: "$3,676.93",
                    Return: "20.48%"
                },
                {
                    Scrip: "MFEM",
                    Quantity: 210,
                    Price: "$23.20",
                    Avg_Cost: "$22.50",
                    Invested_Amount: "$4,725.84",
                    Portfolio_Value: "5.81%",
                    Unrealized_P_L: "$146.16",
                    Return: "3.09%"
                },
                {
                    Scrip: "JPEM",
                    Quantity: 328,
                    Price: "$52.50",
                    Avg_Cost: "$56.70",
                    Invested_Amount: "$18",
                    Portfolio_Value: "5.81%",
                    Unrealized_P_L: "$146.16",
                    Return: "3.09%"
    },

    {
        Scrip: "KEMQ",
        Quantity: 328,
        Price: "$52.50",
        Avg_Cost: "$56.70",
        Invested_Amount: "$18",
        Portfolio_Value: "5.81%",
        Unrealized_P_L: "$146.16",
        Return: "3.09%"
},
{
    Scrip: "KLDW",
    Quantity: 328,
    Price: "$52.50",
    Avg_Cost: "$56.70",
    Invested_Amount: "$18",
    Portfolio_Value: "5.81%",
    Unrealized_P_L: "$146.16",
    Return: "3.09%"
},
{
    Scrip: "KOIN",
    Quantity: 328,
    Price: "$52.50",
    Avg_Cost: "$56.70",
    Invested_Amount: "$18",
    Portfolio_Value: "5.81%",
    Unrealized_P_L: "$146.16",
    Return: "3.09%"
}
    ]

    res.json(portfolioData)
}


