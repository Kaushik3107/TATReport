import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  labels = [
    { label: 'Segment - Digital', value: 'digital' },
    { label: 'Segment - Manual', value: 'manual' },
  ];
  selectedLabel = 'digital';

  chartData: any;
  tableData!: any[];
  grandTotal!: string;
  invoiceTotal!: string;

  updateData() {
    // Mock data based on label selection
    const data =
      this.selectedLabel === 'digital' ? this.digitalData : this.manualData;

    this.chartData = {
      labels: data.map((item) => item.ageing),
      datasets: [
        {
          data: data.map((item) => item.invoiceAmount.replace(/[^0-9]/g, '')),
          backgroundColor: ['green', 'yellow', 'orange', 'pink', 'red', 'blue'],
        },
      ],
    };

    this.tableData = data;

    // Total Invoice Amount
    this.grandTotal = data
      .map((item) => parseInt(item.invoiceAmount.replace(/[^0-9]/g, '')))
      .reduce((a, b) => a + b, 0)
      .toLocaleString('en-IN', {
        style: 'currency',
        currency: 'INR',
      });

    // Total Invoices
    this.invoiceTotal = data
      .map((item) => item.noOfInvoices)
      .reduce((a, b) => a + b, 0)
      .toString();
  }

  // Based on Label Mock data
  digitalData = [
    {
      ageing: '0-7 Days',
      noOfInvoices: 22,
      invoiceAmount: '₹60,000',
      mix: '56.41%',
      indicator: 'green',
    },
    {
      ageing: '8-15 Days',
      noOfInvoices: 8,
      invoiceAmount: '₹25,000',
      mix: '20.51%',
      indicator: 'yellow',
    },
    {
      ageing: '16-20 Days',
      noOfInvoices: 2,
      invoiceAmount: '₹35,000',
      mix: '5.13%',
      indicator: 'orange',
    },
    {
      ageing: '21-30 Days',
      noOfInvoices: 2,
      invoiceAmount: '₹47,000',
      mix: '5.13%',
      indicator: 'pink',
    },
    {
      ageing: '31-45 Days',
      noOfInvoices: 2,
      invoiceAmount: '₹20,000',
      mix: '5.13%',
      indicator: 'red',
    },
    {
      ageing: '>45 Days',
      noOfInvoices: 3,
      invoiceAmount: '₹39,973',
      mix: '7.69%',
      indicator: 'blue',
    },
  ];

  manualData = [
    {
      ageing: '0-7 Days',
      noOfInvoices: 12,
      invoiceAmount: '₹80,000',
      mix: '45.41%',
      indicator: 'green',
    },
    {
      ageing: '8-15 Days',
      noOfInvoices: 20,
      invoiceAmount: '₹65,000',
      mix: '32.51%',
      indicator: 'yellow',
    },
    {
      ageing: '16-20 Days',
      noOfInvoices: 2,
      invoiceAmount: '₹15,000',
      mix: '5.13%',
      indicator: 'orange',
    },
    {
      ageing: '21-30 Days',
      noOfInvoices: 8,
      invoiceAmount: '₹75,000',
      mix: '25.13%',
      indicator: 'pink',
    },
    {
      ageing: '31-45 Days',
      noOfInvoices: 4,
      invoiceAmount: '₹30,000',
      mix: '15.13%',
      indicator: 'red',
    },
    {
      ageing: '>45 Days',
      noOfInvoices: 3,
      invoiceAmount: '₹54,973',
      mix: '17.69%',
      indicator: 'blue',
    },
  ];

  ngOnInit() {
    this.updateData();
  }
}
