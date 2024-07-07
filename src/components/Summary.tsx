import React from 'react';
import styled from 'styled-components';

const SummaryContainer = styled.div`
	display: flex;
	justify-content: space-around;
	margin: 20px 0;
`;

interface SummaryProps {
	income: number;
	expenses: number;
}

const Summary: React.FC<SummaryProps> = ({ income, expenses }) => {
	const balance = income - expenses;

	return (
		<SummaryContainer>
			<div>
				<h2>Income</h2>
				<p>${income}</p>
			</div>
			<div>
				<h2>Expenses</h2>
				<p>${expenses}</p>
			</div>
			<div>
				<h2>Balance</h2>
				<p>${balance}</p>
			</div>
		</SummaryContainer>
	);
};

export default Summary;
