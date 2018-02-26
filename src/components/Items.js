import React, { Component } from 'react';
import{ Table} from 'react-bootstrap';
export default function(){
    return <Table striped bordered condensed hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Qty </th>
        <th>Price</th>
        <th>Total</th>
      </tr>
    </thead>
    <tbody>
    <tr>
        <td>1</td>
        <td>Android</td>
        <td>2</td>
        <td>10</td>
        <td>20</td>
      </tr>
      <tr>
        <td>1</td>
        <td>Android</td>
        <td>2</td>
        <td>10</td>
        <td>20</td>
      </tr>
     
    </tbody>
  </Table>;
}