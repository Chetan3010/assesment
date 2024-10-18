-- 1. Write a SQL query to retrieve the top 5 customers who have purchased the most books (by total quantity) over the last year.

SELECT c.customer_id,
    c.name,
    SUM(od.quantity) as total_books_purchased
FROM 
    Customers c
    JOIN Orders o ON c.customer_id = o.customer_id
    JOIN OrderDetails od ON o.order_id = od.order_id
WHERE 
    o.order_date >= DATE_ADD(now(), INTERVAL -1 YEAR)
GROUP BY 
    c.customer_id
ORDER BY 
    total_books_purchased DESC
LIMIT 5;

-- 2. Write a SQL query to calculate the total revenue generated from book sales by each author.

SELECT 
    b.author,
    SUM(b.price * od.quantity) as total_revenue
FROM 
    Books b
    JOIN OrderDetails od ON b.book_id = od.book_id
GROUP BY 
    b.author
ORDER BY 
    total_revenue DESC;

-- 3. Write a SQL query to retrieve all books that have been ordered more than 10 times, along with the total quantity ordered for each book.

SELECT 
    b.book_id,
    b.title,
    SUM(od.quantity) as total_quantity_ordered
FROM 
    Books b
    JOIN OrderDetails od ON b.book_id = od.book_id
GROUP BY 
    b.book_id
HAVING 
    SUM(od.quantity) > 10
ORDER BY 
    total_quantity_ordered DESC;