import React from 'react';
import styled from 'styled-components';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const BreakdownContainer = styled.div`
	margin: 20px 0;
`;

interface CategoryBreakdownProps {
	data: Record<string, number>;
}

const CategoryBreakdown: React.FC<CategoryBreakdownProps> = ({ data }) => {
	const chartData = {
		labels: Object.keys(data),
		datasets: [
			{
				label: 'Expenses by Category',
				data: Object.values(data),
				backgroundColor: [
					'#FF6384',
					'#36A2EB',
					'#FFCE56',
					'#4BC0C0',
					'#9966FF',
					'#FF9F40',
					'#FFCD56',
				],
				hoverBackgroundColor: [
					'#FF6384',
					'#36A2EB',
					'#FFCE56',
					'#4BC0C0',
					'#9966FF',
					'#FF9F40',
					'#FFCD56',
				],
			},
		],
	};

	return (
		<BreakdownContainer>
			<h2>Category Breakdown</h2>
			<Pie data={chartData} />
		</BreakdownContainer>
	);
};

export default CategoryBreakdown;
