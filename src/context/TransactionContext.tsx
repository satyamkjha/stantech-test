import React, { createContext, useState, useEffect, ReactNode } from 'react';

interface Transaction {
	id: number;
	type: 'income' | 'expense';
	amount: number;
	category: string;
	date: string;
}

interface TransactionContextType {
	transactions: Transaction[];
	addTransaction: (transaction: Omit<Transaction, 'id'>) => void;
	loading: boolean;
	error: Error | null;
}

export const TransactionContext = createContext<
	TransactionContextType | undefined
>(undefined);

interface TransactionProviderProps {
	children: ReactNode;
}

export const TransactionProvider: React.FC<TransactionProviderProps> = ({
	children,
}) => {
	const [transactions, setTransactions] = useState<Transaction[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<Error | null>(null);

	useEffect(() => {
		fetch('/api/transactions')
			.then((response) => response.json())
			.then((data) => {
				setTransactions(data);
				setLoading(false);
			})
			.catch((error) => {
				setError(error);
				setLoading(false);
			});
	}, []);

	const addTransaction = (transaction: Omit<Transaction, 'id'>) => {
		fetch('/api/transactions', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(transaction),
		})
			.then((response) => response.json())
			.then((data) => {
				setTransactions([...transactions, data]);
			})
			.catch((error) => {
				setError(error);
			});
	};

	return (
		<TransactionContext.Provider
			value={{ transactions, addTransaction, loading, error }}>
			{children}
		</TransactionContext.Provider>
	);
};
