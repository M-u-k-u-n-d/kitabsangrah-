package com.kitabsangrah.spring_boot_library.responsemodels;

import com.kitabsangrah.spring_boot_library.entity.Book;

public class ShelfCurrentLoansResponse {

    private Book book;
    private int daysLeft;

    public ShelfCurrentLoansResponse(Book book, int daysLeft) {
        this.book = book;
        this.daysLeft = daysLeft;
    }

    public Book getBook() {
        return book;
    }

    public void setBook(Book book) {
        this.book = book;
    }

    public int getDaysLeft() {
        return daysLeft;
    }

    public void setDaysLeft(int daysLeft) {
        this.daysLeft = daysLeft;
    }

    @Override
    public String toString() {
        return "ShelfCurrentLoansResponse{" +
                "book=" + book +
                ", daysLeft=" + daysLeft +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ShelfCurrentLoansResponse)) return false;

        ShelfCurrentLoansResponse that = (ShelfCurrentLoansResponse) o;

        if (daysLeft != that.daysLeft) return false;
        return book != null ? book.equals(that.book) : that.book == null;
    }

    @Override
    public int hashCode() {
        int result = book != null ? book.hashCode() : 0;
        result = 31 * result + daysLeft;
        return result;
    }
}
