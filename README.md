Azure Computer Vision and Barcode Scanning Project
This project demonstrates the integration of Azure Computer Vision OCR with Scandit Barcode and QR Scanning for text and code capture from images. It provides HTML interfaces for camera capture, barcode scanning, and text extraction using Azure OCR, designed for browser-based applications.

Project Structure
azure.html: A web interface for capturing images and extracting text using Azure's OCR.
azureselectivecapture.html: Similar to azure.html, but includes selective text extraction after specific patterns like "SER.NO.".
Barcode.html: A Scandit-based barcode scanner, supporting multiple symbologies (e.g., EAN, UPC, Code128).
QR.html: A QR code scanner using Scandit, specifically focused on QR code capture.
Features
1. Azure Computer Vision OCR (azure.html and azureselectivecapture.html)
Camera Integration: Uses the device camera to capture images for OCR.
Azure OCR: Extracts text from images via Azure OCR API.
Selective Text Extraction (azureselectivecapture.html): Filters and extracts text patterns based on custom logic (e.g., text after "SER.NO.").
2. Barcode and QR Scanning (Barcode.html and QR.html)
Scandit SDK: Provides a barcode and QR scanning experience.
Multi-format Barcode Scanning (Barcode.html): Supports EAN8, EAN13, UPC, Code128, Code39, etc.
QR Code Scanning (QR.html): Focused on QR code capture, displays scanned data directly.

Usage
OCR Text Extraction
Open azure.html or azureselectivecapture.html in a browser.
Capture an image by clicking Capture Image.
Click Extract Text to perform OCR. Results will appear in the Results section.
Barcode and QR Scanning
Open Barcode.html for barcode scanning or QR.html for QR code scanning.
Start scanning by clicking Start Scanning. Aim the camera at the code to capture data, which displays below the scanner.
Technologies Used
HTML5 and JavaScript for web interface and functionality.
Azure Computer Vision OCR API for text extraction.
Scandit SDK for barcode and QR code scanning.
