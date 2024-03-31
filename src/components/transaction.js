import "./transaction.css";
import * as React from 'react';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardActions from '@mui/joy/CardActions';
import CircularProgress from '@mui/joy/CircularProgress';
import Typography from '@mui/joy/Typography';
import SvgIcon from '@mui/joy/SvgIcon';
import { Color } from "../resources/color";

function Transaction() {
    // Sample data for multiple cards
    const cardsData = [
        { title: "Transaction 1", amount: "$ 432.6M", percentage: 20 ,sender:"0000000000"},
        { title: "Transaction 2", amount: "$ 500M", percentage: 50 ,sender:"0000000000"},
        { title: "Transaction 3", amount: "$ 300M", percentage: 70 ,sender:"0000000000"},
    ];

    return (
        <div className="main">
            <h1 style={{ paddingBottom: 40 ,paddingTop:30}}>Transactions</h1>
            <div className="cards-container">
                {cardsData.map((data, index) => (
                    <Card key={index} variant="soft" color={Color.Primary} invertedColors className="customcard">
                        <CardContent orientation="horizontal">
                            <CircularProgress size="lg" determinate value={data.percentage} color={Color.Primary}>
                                <SvgIcon>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                                        />
                                    </svg>
                                </SvgIcon>
                            </CircularProgress>
                            <CardContent>
                                <Typography level="body-md">{data.title}</Typography>
                                <Typography level="h2">{data.amount}</Typography>
                            </CardContent>
                            <Typography level="body-md">{data.sender}</Typography>

                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default Transaction;
