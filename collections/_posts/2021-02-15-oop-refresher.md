---
layout: post
title: "Object Oriented Design Refresher"
date: 2021-02-15 16:28:13 -0600
update: 2021-03-05 18:28:30 -0600
tags: Java DesignPattern
---
Hello, this is currently a code block placeholder for the moment being. I plan on reviewing object-oriented designs by writing a small project where multiple designs are used.

## Things I will cover:
- A couple of object oriented designs used in the small project.
- Reasons why it can be important to know this.
- (Bonus) A quick section where I will write tests and to show how helpful object oriented designs can be.

## Below is a code block placeholder:

```java
public abstract class Shape {
    private String shapeName;
    private int shapeSides;

    abstract public void calculateArea();
}

public class Rectangle extends Shape {
    public void calculateArea() {
        System.out.println("The area is whatever.");
    }
}

public class Main {
    public static void main(String args[]) {
        Rectangle rectangle = new Rectangle();
        rectangle.calculateArea();
    }
}
```