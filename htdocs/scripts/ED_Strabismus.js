/**
 * @fileOverview Contains doodle subclasses for Strabismus and Orthoptics
 * @author <a href="mailto:bill.aylward@mac.com">Bill Aylward</a>
 * @version 0.8
 *
 * Modification date: 22nd October 2011
 * Copyright 2011 OpenEyes
 * 
 * This file is part of OpenEyes.
 * 
 * OpenEyes is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * OpenEyes is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with OpenEyes.  If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * Defines the EyeDraw namespace
 * @namespace Namespace for all EyeDraw classes
 */
if (ED == null || typeof(ED) != "object") { var ED = new Object();}

/**
 * An example to be used as a template
 *
 * @class OrthopticEye
 * @property {String} className Name of doodle subclass
 * @param {Drawing} _drawing
 * @param {Int} _originX
 * @param {Int} _originY
 * @param {Float} _radius
 * @param {Int} _apexX
 * @param {Int} _apexY
 * @param {Float} _scaleX
 * @param {Float} _scaleY
 * @param {Float} _arc
 * @param {Float} _rotation
 * @param {Int} _order
 */
ED.OrthopticEye = function(_drawing, _originX, _originY, _radius, _apexX, _apexY, _scaleX, _scaleY, _arc, _rotation, _order)
{
	// Call superclass constructor
	ED.Doodle.call(this, _drawing, _originX, _originY, _radius, _apexX, _apexY, _scaleX, _scaleY, _arc, _rotation, _order);
	
	// Set classname
	this.className = "OrthopticEye";
}

/**
 * Sets superclass and constructor
 */
ED.OrthopticEye.prototype = new ED.Doodle;
ED.OrthopticEye.prototype.constructor = ED.OrthopticEye;
ED.OrthopticEye.superclass = ED.Doodle.prototype;

/**
 * Sets handle attributes
 */
ED.OrthopticEye.prototype.setHandles = function()
{
}

/**
 * Sets default dragging attributes
 */
ED.OrthopticEye.prototype.setPropertyDefaults = function()
{
	this.isSelectable = false;
	this.isOrientated = false;
	this.isScaleable = false;
	this.isSqueezable = false;
	this.isMoveable = false;
	this.isRotatable = false;
    this.isFilled = false;
}

/**
 * Sets default parameters
 */
ED.OrthopticEye.prototype.setParameterDefaults = function()
{
}

/**
 * Draws doodle or performs a hit test if a Point parameter is passed
 *
 * @param {Point} _point Optional point in canvas plane, passed if performing hit test
 */
ED.OrthopticEye.prototype.draw = function(_point)
{
	// Get context
	var ctx = this.drawing.context;
	
	// Call draw method in superclass
	ED.OrthopticEye.superclass.draw.call(this, _point);
    
	// Boundary path
	//ctx.beginPath();
	
	// Draw boundary path (also hit testing)
	this.drawBoundary(_point);
	
	// Other stuff here
	if (this.drawFunctionMode == ED.drawFunctionMode.Draw)
	{
        // Set line attributes
        ctx.lineWidth = 12;
        ctx.strokeStyle = "rgba(80,80,80,1)";
        
        // Upper Eye lid
        ctx.beginPath();
        ctx.arc(0,100,500,-Math.PI*3/4,-Math.PI*1/4,false);
        ctx.stroke();
        
        // Lower Eye lid
        ctx.beginPath();
        ctx.arc(0,-100,500,Math.PI*1/4,Math.PI*3/4,false);
        ctx.stroke();
	}
	
	// Return value indicating successful hittest
	return this.isClicked;
}

/**
 * Shading degeneration
 *
 * @class Shading
 * @property {String} className Name of doodle subclass
 * @param {Drawing} _drawing
 * @param {Int} _originX
 * @param {Int} _originY
 * @param {Float} _radius
 * @param {Int} _apexX
 * @param {Int} _apexY
 * @param {Float} _scaleX
 * @param {Float} _scaleY
 * @param {Float} _arc
 * @param {Float} _rotation
 * @param {Int} _order
 */
ED.Shading = function(_drawing, _originX, _originY, _radius, _apexX, _apexY, _scaleX, _scaleY, _arc, _rotation, _order)
{
	// Call superclass constructor
	ED.Doodle.call(this, _drawing, _originX, _originY, _radius, _apexX, _apexY, _scaleX, _scaleY, _arc, _rotation, _order);
	
	// Set classname
	this.className = "Shading";
}

/**
 * Sets superclass and constructor
 */
ED.Shading.prototype = new ED.Doodle;
ED.Shading.prototype.constructor = ED.Shading;
ED.Shading.superclass = ED.Doodle.prototype;

/**
 * Sets handle attributes
 */
ED.Shading.prototype.setHandles = function()
{
	this.handleArray[3] = new ED.Handle(null, true, ED.Mode.Scale, false);
}

/**
 * Sets default dragging attributes
 */
ED.Shading.prototype.setPropertyDefaults = function()
{
	this.isSelectable = true;
	this.isOrientated = true;
	this.isScaleable = true;
	this.isSqueezable = true;
	this.isMoveable = true;
	this.isRotatable = true;
	this.rangeOfScale = new ED.Range(+0.125, +1.5);
}

/**
 * Sets default parameters
 */
ED.Shading.prototype.setParameterDefaults = function()
{
    this.originY = -200;
}

/**
 * Draws doodle or performs a hit test if a Point parameter is passed
 *
 * @param {Point} _point Optional point in canvas plane, passed if performing hit test
 */
ED.Shading.prototype.draw = function(_point)
{
	// Get context
	var ctx = this.drawing.context;
	
	// Call draw method in superclass
	ED.Shading.superclass.draw.call(this, _point);
    
	// Boundary path
	ctx.beginPath();
    
	// Rectangular area
	ctx.rect(-300, -100, 600, 200);
    
	// Close path
	ctx.closePath();
    
    // create pattern
	ctx.fillStyle = "rgba(190, 190, 190, 0.55)";
	ctx.strokeStyle = "rgba(0, 0, 0, 0)";
	
	// Draw boundary path (also hit testing)
	this.drawBoundary(_point);
	
	// Other stuff here
	if (this.drawFunctionMode == ED.drawFunctionMode.Draw)
	{
        ctx.beginPath();
        ctx.moveTo(-300, 100);
        var dash = 42;
        var gap = 20;
        var length = 0;
        while (length < 540)
        {
            length += dash;
            ctx.lineTo(-300 + length, 100);
            length += gap;            
            ctx.moveTo(-300 + length, 100);
        }
        ctx.lineTo(300, 100);
        
        // Draw line
        ctx.lineWidth = 12;
        ctx.strokeStyle = "rgba(80, 80, 80, 1)";
        ctx.stroke();
	}
	
	// Coordinates of handles (in canvas plane)
	this.handleArray[3].location = this.transform.transformPoint(new ED.Point(300, 100));
	
	// Draw handles if selected
	if (this.isSelected && !this.isForDrawing) this.drawHandles(_point);
	
	// Return value indicating successful hittest
	return this.isClicked;
}


/**
 * UpShoot
 *
 * @class UpShoot
 * @property {String} className Name of doodle subclass
 * @param {Drawing} _drawing
 * @param {Int} _originX
 * @param {Int} _originY
 * @param {Float} _radius
 * @param {Int} _apexX
 * @param {Int} _apexY
 * @param {Float} _scaleX
 * @param {Float} _scaleY
 * @param {Float} _arc
 * @param {Float} _rotation
 * @param {Int} _order
 */
ED.UpShoot = function(_drawing, _originX, _originY, _radius, _apexX, _apexY, _scaleX, _scaleY, _arc, _rotation, _order)
{
	// Call superclass constructor
	ED.Doodle.call(this, _drawing, _originX, _originY, _radius, _apexX, _apexY, _scaleX, _scaleY, _arc, _rotation, _order);
	
	// Set classname
	this.className = "UpShoot";
}

/**
 * Sets superclass and constructor
 */
ED.UpShoot.prototype = new ED.Doodle;
ED.UpShoot.prototype.constructor = ED.UpShoot;
ED.UpShoot.superclass = ED.Doodle.prototype;

/**
 * Sets handle attributes
 */
ED.UpShoot.prototype.setHandles = function()
{
}

/**
 * Sets default dragging attributes
 */
ED.UpShoot.prototype.setPropertyDefaults = function()
{
	this.isSelectable = true;
	this.isOrientated = false;
	this.isScaleable = false;
	this.isSqueezable = false;
	this.isMoveable = true;
	this.isRotatable = false;
    this.snapToQuadrant = true;
    this.quadrantPoint = new ED.Point(370, 250);
}

/**
 * Sets default parameters
 */
ED.UpShoot.prototype.setParameterDefaults = function()
{
}

/**
 * Draws doodle or performs a hit test if a Point parameter is passed
 *
 * @param {Point} _point Optional point in canvas plane, passed if performing hit test
 */
ED.UpShoot.prototype.draw = function(_point)
{
    // Use scale to flip arrow into correct position for quadrant
    this.scaleX = this.originX/Math.abs(this.originX);
    this.scaleY = this.originY/Math.abs(this.originY);
    
	// Get context
	var ctx = this.drawing.context;
	
	// Call draw method in superclass
	ED.UpShoot.superclass.draw.call(this, _point);
    
	// Boundary path
	ctx.beginPath();
    
	// Rectangular area
	ctx.rect(-100, -100, 200, 200);
    
	// Close path
	ctx.closePath();
	
	// Set line attributes
	ctx.lineWidth = 0;
	ctx.fillStyle = "rgba(0, 0, 0, 0)";
	ctx.strokeStyle = ctx.fillStyle;
    
	// Draw boundary path (also hit testing)
	this.drawBoundary(_point);
	
	// Other stuff here
	if (this.drawFunctionMode == ED.drawFunctionMode.Draw)
	{
        // Arrow shaft
        ctx.beginPath();
        ctx.moveTo(-100, -100);
        ctx.lineTo(100, -100);
        ctx.lineTo(100, 80);
        
        ctx.lineWidth = 6;
        ctx.lineJoin = 'miter';
        ctx.strokeStyle = "rgba(80, 80, 80, 1)";
        ctx.stroke();
        
        // Arrow head
        ctx.beginPath();
        ctx.moveTo(100, 100);
        ctx.lineTo(80, 70);
        ctx.lineTo(120, 70);
        ctx.closePath();
        
        ctx.fillStyle = "rgba(80, 80, 80, 1)";
        ctx.fill();
	}
	
	// Draw handles if selected
	if (this.isSelected && !this.isForDrawing) this.drawHandles(_point);
	
	// Return value indicating successful hittest
	return this.isClicked;
}

/**
 * Returns a string containing a text description of the doodle
 *
 * @returns {String} Description of doodle
 */
ED.UpShoot.prototype.description = function()
{
    var returnString = "UpShoot";
	
	return returnString;
}

/**
 * UpDrift
 *
 * @class UpDrift
 * @property {String} className Name of doodle subclass
 * @param {Drawing} _drawing
 * @param {Int} _originX
 * @param {Int} _originY
 * @param {Float} _radius
 * @param {Int} _apexX
 * @param {Int} _apexY
 * @param {Float} _scaleX
 * @param {Float} _scaleY
 * @param {Float} _arc
 * @param {Float} _rotation
 * @param {Int} _order
 */
ED.UpDrift = function(_drawing, _originX, _originY, _radius, _apexX, _apexY, _scaleX, _scaleY, _arc, _rotation, _order)
{
	// Call superclass constructor
	ED.Doodle.call(this, _drawing, _originX, _originY, _radius, _apexX, _apexY, _scaleX, _scaleY, _arc, _rotation, _order);
	
	// Set classname
	this.className = "UpDrift";
}

/**
 * Sets superclass and constructor
 */
ED.UpDrift.prototype = new ED.Doodle;
ED.UpDrift.prototype.constructor = ED.UpDrift;
ED.UpDrift.superclass = ED.Doodle.prototype;

/**
 * Sets handle attributes
 */
ED.UpDrift.prototype.setHandles = function()
{
}

/**
 * Sets default dragging attributes
 */
ED.UpDrift.prototype.setPropertyDefaults = function()
{
	this.isSelectable = true;
	this.isOrientated = false;
	this.isScaleable = false;
	this.isSqueezable = false;
	this.isMoveable = true;
	this.isRotatable = false;
    this.snapToQuadrant = true;
    this.quadrantPoint = new ED.Point(370, 250);
}

/**
 * Sets default parameters
 */
ED.UpDrift.prototype.setParameterDefaults = function()
{
}

/**
 * Draws doodle or performs a hit test if a Point parameter is passed
 *
 * @param {Point} _point Optional point in canvas plane, passed if performing hit test
 */
ED.UpDrift.prototype.draw = function(_point)
{
    // Use scale to flip arrow into correct position for quadrant
    this.scaleX = this.originX/Math.abs(this.originX);
    this.scaleY = this.originY/Math.abs(this.originY);
    
	// Get context
	var ctx = this.drawing.context;
	
	// Call draw method in superclass
	ED.UpDrift.superclass.draw.call(this, _point);
    
	// Boundary path
	ctx.beginPath();
    
	// Rectangular area
	ctx.rect(-100, -100, 200, 200);
    
	// Close path
	ctx.closePath();
	
	// Set line attributes
	// Set line attributes
	ctx.lineWidth = 0;
	ctx.fillStyle = "rgba(0, 0, 0, 0)";
	ctx.strokeStyle = ctx.fillStyle;
    
	// Draw boundary path (also hit testing)
	this.drawBoundary(_point);
	
	// Other stuff here
	if (this.drawFunctionMode == ED.drawFunctionMode.Draw)
	{
        // Arrow body
        ctx.beginPath();
        ctx.arc(-98, 100, 200, -Math.PI/2, -0.1, false);
        ctx.lineWidth = 6;
        ctx.lineJoin = 'miter';
        ctx.strokeStyle = "rgba(80, 80, 80, 1)";
        ctx.fillStyle = "rgba(0, 0, 0, 0)";
        ctx.stroke();
        
        // Arrow head
        ctx.beginPath();
        ctx.moveTo(100, 100);
        ctx.lineTo(80, 70);
        ctx.lineTo(120, 70);
        ctx.closePath();
        ctx.fillStyle = "rgba(80, 80, 80, 1)";
        ctx.fill();
	}
	
	// Draw handles if selected
	if (this.isSelected && !this.isForDrawing) this.drawHandles(_point);
	
	// Return value indicating successful hittest
	return this.isClicked;
}

/**
 * Returns a string containing a text description of the doodle
 *
 * @returns {String} Description of doodle
 */
ED.UpDrift.prototype.description = function()
{
    var returnString = "UpDrift";
	
	return returnString;
}

/**
 * APattern
 *
 * @class APattern
 * @property {String} className Name of doodle subclass
 * @param {Drawing} _drawing
 * @param {Int} _originX
 * @param {Int} _originY
 * @param {Float} _radius
 * @param {Int} _apexX
 * @param {Int} _apexY
 * @param {Float} _scaleX
 * @param {Float} _scaleY
 * @param {Float} _arc
 * @param {Float} _rotation
 * @param {Int} _order
 */
ED.APattern = function(_drawing, _originX, _originY, _radius, _apexX, _apexY, _scaleX, _scaleY, _arc, _rotation, _order)
{
	// Call superclass constructor
	ED.Doodle.call(this, _drawing, _originX, _originY, _radius, _apexX, _apexY, _scaleX, _scaleY, _arc, _rotation, _order);
	
	// Set classname
	this.className = "APattern";
}

/**
 * Sets superclass and constructor
 */
ED.APattern.prototype = new ED.Doodle;
ED.APattern.prototype.constructor = ED.APattern;
ED.APattern.superclass = ED.Doodle.prototype;

/**
 * Sets handle attributes
 */
ED.APattern.prototype.setHandles = function()
{
}

/**
 * Sets default dragging attributes
 */
ED.APattern.prototype.setPropertyDefaults = function()
{
	this.isSelectable = false;
	this.isOrientated = false;
	this.isScaleable = false;
	this.isSqueezable = false;
	this.isMoveable = false;
	this.isRotatable = false;
}

/**
 * Sets default parameters
 */
ED.APattern.prototype.setParameterDefaults = function()
{
    if(this.drawing.eye == ED.eye.Right)
    {
        this.rotation = Math.PI/8;
    }
    else
    {
        this.rotation = -Math.PI/8;        
    }
}

/**
 * Draws doodle or performs a hit test if a Point parameter is passed
 *
 * @param {Point} _point Optional point in canvas plane, passed if performing hit test
 */
ED.APattern.prototype.draw = function(_point)
{
	// Get context
	var ctx = this.drawing.context;
	
	// Call draw method in superclass
	ED.APattern.superclass.draw.call(this, _point);
    
	// Boundary path
	ctx.beginPath();
    
	// Dotted Line
    var dash = 4;
    var gap = 4;
    var length = 0;
    var startY = -500;
    ctx.moveTo(0, startY)
    while (length < -2*startY)
    {
        length += dash;
        ctx.lineTo(0, startY + length);
        length += gap;            
        ctx.moveTo(0, startY + length);
    }
    
	// Close path
	ctx.closePath();
	
	// Set line attributes
	ctx.lineWidth = 4;
    ctx.strokeStyle = "rgba(80, 80, 80, 1)";
    
	// Draw boundary path (also hit testing)
	this.drawBoundary(_point);
	
	// Other stuff here
	if (this.drawFunctionMode == ED.drawFunctionMode.Draw)
	{
	}
	
	// Draw handles if selected
	if (this.isSelected && !this.isForDrawing) this.drawHandles(_point);
	
	// Return value indicating successful hittest
	return this.isClicked;
}

/**
 * Returns a string containing a text description of the doodle
 *
 * @returns {String} Description of doodle
 */
ED.APattern.prototype.description = function()
{
    var returnString = "UpShoot";
	
	return returnString;
}

/**
 * VPattern
 *
 * @class VPattern
 * @property {String} className Name of doodle subclass
 * @param {Drawing} _drawing
 * @param {Int} _originX
 * @param {Int} _originY
 * @param {Float} _radius
 * @param {Int} _apexX
 * @param {Int} _apexY
 * @param {Float} _scaleX
 * @param {Float} _scaleY
 * @param {Float} _arc
 * @param {Float} _rotation
 * @param {Int} _order
 */
ED.VPattern = function(_drawing, _originX, _originY, _radius, _apexX, _apexY, _scaleX, _scaleY, _arc, _rotation, _order)
{
	// Call superclass constructor
	ED.Doodle.call(this, _drawing, _originX, _originY, _radius, _apexX, _apexY, _scaleX, _scaleY, _arc, _rotation, _order);
	
	// Set classname
	this.className = "VPattern";
}

/**
 * Sets superclass and constructor
 */
ED.VPattern.prototype = new ED.Doodle;
ED.VPattern.prototype.constructor = ED.VPattern;
ED.VPattern.superclass = ED.Doodle.prototype;

/**
 * Sets handle attributes
 */
ED.VPattern.prototype.setHandles = function()
{
}

/**
 * Sets default dragging attributes
 */
ED.VPattern.prototype.setPropertyDefaults = function()
{
	this.isSelectable = false;
	this.isOrientated = false;
	this.isScaleable = false;
	this.isSqueezable = false;
	this.isMoveable = false;
	this.isRotatable = false;
}

/**
 * Sets default parameters
 */
ED.VPattern.prototype.setParameterDefaults = function()
{
    if(this.drawing.eye == ED.eye.Right)
    {
        this.rotation = -Math.PI/8;
    }
    else
    {
        this.rotation = Math.PI/8;        
    }
}

/**
 * Draws doodle or performs a hit test if a Point parameter is passed
 *
 * @param {Point} _point Optional point in canvas plane, passed if performing hit test
 */
ED.VPattern.prototype.draw = function(_point)
{
	// Get context
	var ctx = this.drawing.context;
	
	// Call draw method in superclass
	ED.VPattern.superclass.draw.call(this, _point);
    
	// Boundary path
	ctx.beginPath();
    
	// Dotted Line
    var dash = 4;
    var gap = 4;
    var length = 0;
    var startY = -500;
    ctx.moveTo(0, startY)
    while (length < -2*startY)
    {
        length += dash;
        ctx.lineTo(0, startY + length);
        length += gap;            
        ctx.moveTo(0, startY + length);
    }
    
	// Close path
	ctx.closePath();
	
	// Set line attributes
	ctx.lineWidth = 4;
    ctx.strokeStyle = "rgba(80, 80, 80, 1)";
    
	// Draw boundary path (also hit testing)
	this.drawBoundary(_point);
	
	// Other stuff here
	if (this.drawFunctionMode == ED.drawFunctionMode.Draw)
	{
	}
	
	// Draw handles if selected
	if (this.isSelected && !this.isForDrawing) this.drawHandles(_point);
	
	// Return value indicating successful hittest
	return this.isClicked;
}

/**
 * Returns a string containing a text description of the doodle
 *
 * @returns {String} Description of doodle
 */
ED.VPattern.prototype.description = function()
{
    var returnString = "UpShoot";
	
	return returnString;
}

/**
 * A rectus muscle
 *
 * @class Rectus
 * @property {String} className Name of doodle subclass
 * @param {Drawing} _drawing
 * @param {Int} _originX
 * @param {Int} _originY
 * @param {Float} _radius
 * @param {Int} _apexX
 * @param {Int} _apexY
 * @param {Float} _scaleX
 * @param {Float} _scaleY
 * @param {Float} _arc
 * @param {Float} _rotation
 * @param {Int} _order
 * @constructor
 */
ED.Rectus = function(_drawing, _originX, _originY, _radius, _apexX, _apexY, _scaleX, _scaleY, _arc, _rotation, _order)
{
	// Set classname
	this.className = "Rectus";
    
    // Specific properties
    this.insertionY = -200;
    this.hangback = false;
    
	// Call superclass constructor
	ED.Doodle.call(this, _drawing, _originX, _originY, _radius, _apexX, _apexY, _scaleX, _scaleY, _arc, _rotation, _order);
}

/**
 * Sets superclass and constructor
 */
ED.Rectus.prototype = new ED.Doodle;
ED.Rectus.prototype.constructor = ED.Rectus;
ED.Rectus.superclass = ED.Doodle.prototype;

/**
 * Sets handle attributes
 */
ED.Rectus.prototype.setHandles = function()
{
	this.handleArray[4] = new ED.Handle(null, true, ED.Mode.Apex, false);
}

/**
 * Sets default dragging attributes
 */
ED.Rectus.prototype.setPropertyDefaults = function()
{
	this.isSelectable = true;
	this.isOrientated = false;
	this.isScaleable = false;
	this.isSqueezable = false;
	this.isMoveable = false;
	this.isRotatable = false;
}

/**
 * Sets default parameters
 */
ED.Rectus.prototype.setParameterDefaults = function()
{
	this.apexX = 0;
    this.apexY = this.insertionY;
}

/**
 * Draws doodle or performs a hit test if a Point parameter is passed
 *
 * @param {Point} _point Optional point in canvas plane, passed if performing hit test
 */
ED.Rectus.prototype.draw = function(_point)
{
    // Constrain to a cross shaped path
    var cw = 15;
    
    // Adjust ranges of apexX
    if (this.apexY > this.insertionY - cw && this.apexY < this.insertionY + cw)
    {
        this.rangeOfApexX = new ED.Range(-100, +100);
    }
    else
    {
        this.rangeOfApexX = new ED.Range(0, 0);

    }

    // Adjust ranges of apexY
    if (this.apexX > - cw && this.apexX < cw)
    {
        this.rangeOfApexY = new ED.Range(-400, -100);
    }
    else
    {
        this.rangeOfApexY = new ED.Range(-200, -200);
    }
    
	// Get context
	var ctx = this.drawing.context;
	
	// Call draw method in superclass
	ED.Rectus.superclass.draw.call(this, _point);
	
	// Boundary path
	ctx.beginPath();
    
    var muscleHalfWidth = 60;
    var startY = -450;
	
	// Rectus
	ctx.moveTo(-muscleHalfWidth, startY);
    ctx.lineTo(muscleHalfWidth, startY);
    ctx.lineTo(this.apexX + muscleHalfWidth, this.apexY);
    ctx.lineTo(this.apexX - muscleHalfWidth, this.apexY);   
	
	// Close path
	ctx.closePath();
	
	// Set line attributes
	ctx.lineWidth = 2;
	ctx.fillStyle = "rgba(255, 140 , 80, 1)";
    ctx.strokeStyle = "rgba(255, 184, 93, 1)";
	
	// Draw boundary path (also hit testing)
	this.drawBoundary(_point);
	
	// Other stuff here
	if (this.drawFunctionMode == ED.drawFunctionMode.Draw)
	{
        // Indicate a recession by continuing muscle beyond insertion with different fill
        if (this.insertionY < this.apexY)
        {
            // x coordinate of left side of muscle at insertion
            var xi = -muscleHalfWidth + this.apexX * (this.insertionY - startY)/(this.apexY - startY);
            
            // Part of muscle anterior to insertion
            ctx.beginPath();
            ctx.moveTo(xi, this.insertionY);
            ctx.lineTo(xi + 2 * muscleHalfWidth, this.insertionY);
            ctx.lineTo(this.apexX + muscleHalfWidth, this.apexY);
            ctx.lineTo(this.apexX - muscleHalfWidth, this.apexY);
            ctx.closePath();

            ctx.fillStyle = "rgba(255, 220, 140, 1)";
            ctx.fill();
        }
        
        // Suture
        if (!(this.apexX == 0 && this.recession() == "0.0"))
        {
            var margin = 15;
            var sutureLength = 15;
            var indent = 10;
            var bite = 20;
            
            // Y coordinate of muscle bite
            var ym;
            if (this.insertionY > this.apexY)
            {
                ym = this.apexY;
            }
            else
            {
                ym = this.insertionY;
            }
            
            // Y coordinate of knot
            var yk;
            if (!this.hangback && this.insertionY > this.apexY)
            {
                yk = this.apexY + margin;
            }
            else
            {
                yk = this.insertionY + margin;
            }
            
            // X coordinate
            var x = this.apexX;

            ctx.beginPath();
            ctx.moveTo(x, yk);
            ctx.lineTo(x - sutureLength, yk + sutureLength);
            ctx.moveTo(x + sutureLength, yk + sutureLength);
            ctx.lineTo(x, yk);
            ctx.arc(x, yk, 4, 0, Math.PI*2, true);            
            ctx.moveTo(x, yk);
            ctx.lineTo(x - muscleHalfWidth + indent, yk);
            ctx.lineTo(x - muscleHalfWidth + indent, ym);
            ctx.moveTo(x - muscleHalfWidth + indent, ym - margin);
            ctx.lineTo(x - muscleHalfWidth + indent + bite, ym - margin);
            ctx.moveTo(x + muscleHalfWidth - indent - bite, ym - margin);
            ctx.lineTo(x + muscleHalfWidth - indent, ym - margin);
            ctx.moveTo(x + muscleHalfWidth - indent, ym);  
            ctx.lineTo(x + muscleHalfWidth - indent, yk);             
            ctx.lineTo(x, yk);      
            
            ctx.lineWidth = 4;
            ctx.strokeStyle = "black";
            ctx.stroke();
        }
	}
	
	// Coordinates of handles (in canvas plane)
	this.handleArray[4].location = this.transform.transformPoint(new ED.Point(this.apexX, this.apexY));
	
	// Draw handles if selected
	if (this.isSelected && !this.isForDrawing) this.drawHandles(_point);
	
	// Return value indicating successful hittest
	return this.isClicked;
}

/**
 * Returns parameters
 *
 * @returns {String} value of parameter
 */
ED.Rectus.prototype.getParameter = function(_parameter)
{
    var returnValue;
    var isRE = (this.drawing.eye == ED.eye.Right);
    
    switch (_parameter)
    {
        // Recession
        case 'recession':
            returnValue = this.recession();
            break;

        // Transposition
        case 'transposition':
            returnValue = this.transposition();
            break;
            
        default:
            returnValue = "";
            break;
    }
    
    return returnValue;
}

/**
 * Sets value of parameter
 *
 */
ED.Rectus.prototype.setParameter = function(_parameter, _value)
{
    switch (_parameter)
    {
        // Recession
        case 'recession':
            this.apexY = _value * 16  + this.insertionY;
            break;
 
        // Transposition
        case 'transposition':
            this.apexX = _value * 16;
            break;
            
        default:
            break;
    }    
}

/**
 * Calculate recession in half millimetre increments
 *
 * @returns {String} recession
 */
ED.Rectus.prototype.recession = function()
{
    return (Math.round(2 * (this.apexY - this.insertionY)/16)/2).toFixed(1);
}

/**
 * Calculate transposition in half millimetre increments
 *
 * @returns {String} transposition
 */
ED.Rectus.prototype.transposition = function()
{
    return (Math.round(2 * this.apexX/16)/2).toFixed(1);
}

/**
 * Template for strabismus surgery
 *
 * @class StrabOpTemplate
 * @property {String} className Name of doodle subclass
 * @param {Drawing} _drawing
 * @param {Int} _originX
 * @param {Int} _originY
 * @param {Float} _radius
 * @param {Int} _apexX
 * @param {Int} _apexY
 * @param {Float} _scaleX
 * @param {Float} _scaleY
 * @param {Float} _arc
 * @param {Float} _rotation
 * @param {Int} _order
 */
ED.StrabOpTemplate = function(_drawing, _originX, _originY, _radius, _apexX, _apexY, _scaleX, _scaleY, _arc, _rotation, _order)
{
	// Call superclass constructor
	ED.Doodle.call(this, _drawing, _originX, _originY, _radius, _apexX, _apexY, _scaleX, _scaleY, _arc, _rotation, _order);
	
	// Set classname
	this.className = "StrabOpTemplate";
}

/**
 * Sets superclass and constructor
 */
ED.StrabOpTemplate.prototype = new ED.Doodle;
ED.StrabOpTemplate.prototype.constructor = ED.StrabOpTemplate;
ED.StrabOpTemplate.superclass = ED.Doodle.prototype;

/**
 * Sets default dragging attributes
 */
ED.StrabOpTemplate.prototype.setPropertyDefaults = function()
{
	this.isSelectable = false;
}

/**
 * Draws doodle or performs a hit test if a Point parameter is passed
 *
 * @param {Point} _point Optional point in canvas plane, passed if performing hit test
 */
ED.StrabOpTemplate.prototype.draw = function(_point)
{
	// Get context
	var ctx = this.drawing.context;
	
	// Call draw method in superclass
	ED.StrabOpTemplate.superclass.draw.call(this, _point);
    
    // Drawing properties
    var insertionY = -200;
    var insertionHalfWidth = 70;
	
	// Boundary path
	ctx.beginPath();
	
	// Round hole
	ctx.arc(0,0,80,0,Math.PI*2,true);
    
	// Close path
	ctx.closePath();
	
	// Set line attributes
	ctx.lineWidth = 4;
	ctx.fillStyle = "rgba(100, 200, 250, 0.75)";
	ctx.strokeStyle = "blue";
	
	// Draw boundary path (also hit testing)
	this.drawBoundary(_point);
	
	// Other stuff here
	if (this.drawFunctionMode == ED.drawFunctionMode.Draw)
	{
        // Pupil
        ctx.beginPath();
        ctx.arc(0,0,30,0,Math.PI*2,true);
        ctx.fillStyle = "black";
        ctx.fill();
        
        // Insertions
        ctx.beginPath();
        ctx.moveTo(-insertionHalfWidth, insertionY);
        ctx.lineTo(insertionHalfWidth, insertionY);
        ctx.moveTo(insertionY, -insertionHalfWidth);
        ctx.lineTo(insertionY, insertionHalfWidth);
        ctx.moveTo(-insertionHalfWidth, -insertionY);
        ctx.lineTo(insertionHalfWidth, -insertionY); 
        ctx.moveTo(-insertionY, -insertionHalfWidth);
        ctx.lineTo(-insertionY, insertionHalfWidth);
        ctx.lineWidth = 16;
        ctx.strokeStyle = "brown";
        ctx.stroke();
	}
	
	// Draw handles if selected
	if (this.isSelected && !this.isForDrawing) this.drawHandles(_point);
    
	// Return value indicating successful hittest
	return this.isClicked;
}


