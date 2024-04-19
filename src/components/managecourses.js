import React, { useState, useEffect } from "react";
import "./homestyle.css";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { SearchBar } from '@cred/neopop-web/lib/components';
import { colorGuide } from '@cred/neopop-web/lib/primitives';
import { BsBell } from "react-icons/bs";
import { Button } from "primereact/button";

function Managecourses() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        console.log("useEffect called");
        // Fetch data from local storage
        const savedData = JSON.parse(localStorage.getItem("courseFormData"));
        if (savedData) {
            // Check if savedData already exists in products state
            const exists = products.some(product => product.code === savedData.code);
            if (!exists) {
                // Merge data from local storage with sample data
                setProducts(prevProducts => [
                    ...prevProducts,
                    savedData
                ]);
            }
        }
        
        // For demonstration purposes, I'm generating some sample data
        const sampleData = [
            { code: '101', name: 'Course A', category: 'Category A', quantity: 10, unit: 'Unit A', weight: 'Weight A', cost: '$10', precautions: 'Precaution A', origin: 'Origin A' },
            { code: '102', name: 'Course B', category: 'Category B', quantity: 20, unit: 'Unit B', weight: 'Weight B', cost: '$20', precautions: 'Precaution B', origin: 'Origin B' },
            { code: '103', name: 'Course C', category: 'Category C', quantity: 15, unit: 'Unit C', weight: 'Weight C', cost: '$15', precautions: 'Precaution C', origin: 'Origin C' }
        ];
        // Check if sampleData already exists in products state
        const newProducts = sampleData.filter(newProduct => !products.some(product => product.code === newProduct.code));
        setProducts(prevProducts => [
            ...prevProducts,
            ...newProducts
        ]);
    }, []);
    

    const columns = [
        { field: 'code', header: 'Name' },
        { field: 'name', header: 'Quantity' },
        { field: 'category', header: 'Unit' },
        { field: 'quantity', header: 'Weight' },
        { field: 'cost', header: 'Cost' }, // Updated field for 'Cost' column
        { field: 'precautions', header: 'Precautions' }, // Updated field for 'Precautions' column
        { field: 'origin', header: 'Origin' }, // Updated field for 'Origin' column
    ].filter(col => col.field && col.header); // Remove empty columns

    return (
        <div className="maindiv" style={{ display: 'flex', flexDirection: 'column', marginTop: 20 }}>
            <div className="navbar">
                <SearchBar
                    iconUrl="https://cdn-icons-png.flaticon.com/512/482/482631.png"
                    placeholder="search query here"
                    colorConfig={colorGuide.lightComponents.searchBar}
                    inputColorConfig={colorGuide.lightComponents.inputFields}
                />
                <BsBell style={{ width: 24, height: 21, color: "black", paddingLeft: 12 }} />
            </div>
            <h2 style={{ paddingLeft: 12 }}>Data</h2>
            <div className="card">
                <DataTable value={products} className="p-datatable-striped" style={{ border: '1px solid #ddd', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)', background: 'rgba(255, 255, 255, 0.7)' }}>
                    {columns.map((col, i) => (
                        <Column key={col.field} field={col.field} header={col.header} style={{ borderBottom: '1px solid #ddd', padding: '10px' }} />
                    ))}
                </DataTable>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
                <Button className="nextbtnstyle">Edit</Button>
                <Button className="nextbtnstyle" style={{marginRight:20,marginLeft:20}}>Delete</Button>
            </div>
        </div>
    );
}

export default Managecourses;
