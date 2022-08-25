import { useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { SearchForm } from "./components/SearchForm";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";


export function Transactions() {

  const { transactions } = useContext(TransactionsContext)

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions.map(({ category, createdAt, description, id, price, type }) => (
              <tr key={id}>
                <td width="50%">{description}</td>
                <td>
                  <PriceHighlight variant={type}>{price}
                  </PriceHighlight>
                </td>
                <td>{category}</td>
                <td>{createdAt}</td>
              </tr>
            ))}

          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}