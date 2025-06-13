import { useState } from 'react'
import React from 'react'
import './compo.css'

function Dialog({isOpen,onClose}) {
  const [productID, setProductID] = useState('');
  const [productName, setProductName] = useState('');
  const [supplierID, setSupplierID] = useState('');
  const [categoryID, setCategoryID] = useState('');
  const [quantityPerUnit, setQuantityPerUnit] = useState('');
  const [unitPrice, setUnitPrice] = useState('');
  const [unitsInStock, setUnitsInStock] = useState('');
  const [unitsOnOrder, setUnitsOnOrder] = useState('');
  const [reorderLevel, setReorderLevel] = useState('');
  const [discontinued, setDiscontinued] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); 
    const formData = {
      productID,
      productName,
      supplierID,
      categoryID,
      quantityPerUnit,
      unitPrice,
      unitsInStock,
      unitsOnOrder,
      reorderLevel,
      discontinued,
    };

    console.log("Form Submitted:", formData);
  };

  if(!isOpen){
    return null;
  }
  return  (<div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={onClose}>
            close
        </button>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-4">
        {/* ProductName */}
        <div>
          <label htmlFor="productName" className="block text-sm font-medium text-gray-700 mb-1">Product Name:</label>
          <input
            type="text"
            id="productName"
            name="ProductName"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter product name"
            required
          />
        </div>

        {/* SupplierID */}
        <div>
          <label htmlFor="supplierID" className="block text-sm font-medium text-gray-700 mb-1">Supplier ID:</label>
          <input
            type="number"
            id="supplierID"
            name="SupplierID"
            value={supplierID}
            onChange={(e) => setSupplierID(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter supplier ID"
          />
        </div>

        {/* CategoryID */}
        <div>
          <label htmlFor="categoryID" className="block text-sm font-medium text-gray-700 mb-1">Category ID:</label>
          <input
            type="number"
            id="categoryID"
            name="CategoryID"
            value={categoryID}
            onChange={(e) => setCategoryID(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter category ID"
          />
        </div>

        {/* QuantityPerUnit */}
        <div>
          <label htmlFor="quantityPerUnit" className="block text-sm font-medium text-gray-700 mb-1">Quantity Per Unit:</label>
          <input
            type="number"
            id="quantityPerUnit"
            name="QuantityPerUnit"
            value={quantityPerUnit}
            min="0"
            onChange={(e) => setQuantityPerUnit(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="e.g., 10 boxes, 24 cans"
          />
        </div>

        {/* UnitPrice */}
        <div>
          <label htmlFor="unitPrice" className="block text-sm font-medium text-gray-700 mb-1">Unit Price:</label>
          <input
            type="number"
            id="unitPrice"
            name="UnitPrice"
            step="0.01"
            min="0"
            value={unitPrice}
            onChange={(e) => setUnitPrice(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter unit price"
            required
          />
        </div>

        {/* UnitsInStock */}
        <div>
          <label htmlFor="unitsInStock" className="block text-sm font-medium text-gray-700 mb-1">Units In Stock:</label>
          <input
            type="number"
            id="unitsInStock"
            name="UnitsInStock"
            min="0"
            value={unitsInStock}
            onChange={(e) => setUnitsInStock(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter units in stock"
          />
        </div>

        {/* UnitsOnOrder */}
        <div>
          <label htmlFor="unitsOnOrder" className="block text-sm font-medium text-gray-700 mb-1">Units On Order:</label>
          <input
            type="number"
            id="unitsOnOrder"
            name="UnitsOnOrder"
            value={unitsOnOrder}
            min="0"
            onChange={(e) => setUnitsOnOrder(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter units on order"
          />
        </div>

        {/* ReorderLevel */}
        <div>
          <label htmlFor="reorderLevel" className="block text-sm font-medium text-gray-700 mb-1">Reorder Level:</label>
          <input
            type="number"
            id="reorderLevel"
            name="ReorderLevel"
            min="0"
            value={reorderLevel}
            onChange={(e) => setReorderLevel(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter reorder level"
          />
        </div>

        {/* Discontinued Checkbox */}
        <div className="flex items-center">
          <input
            type="checkbox"
            id="discontinued"
            name="Discontinued"
            checked={discontinued}
            onChange={(e) => setDiscontinued(e.target.checked)}
            className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <label htmlFor="discontinued" className="ml-2 block text-sm font-medium text-gray-700">Discontinued</label>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-3 mt-4">
          <button
            type="button" // Use type="button" to prevent form submission when cancelling
            onClick={onClose}
            className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Save Product
          </button>
        </div>
      </form>
      </div>
    </div>);
}

export default Dialog
