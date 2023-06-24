import React, { useState, useEffect } from 'react';
import {
	Pie,
	PieChart,
	Cell,
	Legend,
	Tooltip,
	ResponsiveContainer,
} from 'recharts';
export default function PieChartData({ data }) {
	const [category, setCategory] = useState({});
	const [pieChartValues, setPieChartValues] = useState([]);
	const viewportWidth =
		window.innerWidth || document.documentElement.clientWidth;
	const twentyFivePercent = viewportWidth * 0.25;
	useEffect(() => {
		(function () {
			const updatedCategory = {};
			for (let i of data.data) {
				if (!updatedCategory[i.job_category]) {
					updatedCategory[i.job_category] = 1;
				} else {
					updatedCategory[i.job_category] += 1;
				}
			}
			setCategory(updatedCategory);
		})();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		const updatedPieChartValues = [];
		for (let i in category) {
			updatedPieChartValues.push({ name: i, value: category[i] });
		}
		setPieChartValues(updatedPieChartValues);
	}, [category]);

	const COLORS = [
		'#e91e63',
		'#ff8c00',
		'#0049b7',
		'#7fa8ff',
		'#2c6bed',
		'#c75c00',
		'#ffb74d',
		'#666666',
		'#cccccc',
		'#333',
	];

	const RADIAN = Math.PI / 180;
	const renderCustomizedLabel = ({
		cx,
		cy,
		midAngle,
		innerRadius,
		outerRadius,
		value,
		index,
	}) => {
		const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
		const x = cx + radius * Math.cos(-midAngle * RADIAN);
		const y = cy + radius * Math.sin(-midAngle * RADIAN);

		return (
			<text
				x={x}
				y={y}
				fill='white'
				textAnchor={x > cx ? 'start' : 'end'}
				dominantBaseline='central'
			>
				{value}
			</text>
		);
	};

	return (
		<ResponsiveContainer width='95%' height={400}>
			<PieChart width={twentyFivePercent - 100} height={100}>
				<Pie
					data={pieChartValues}
					dataKey='value'
					nameKey='name'
					cx='50%'
					cy='50%'
					outerRadius={150}
					fill='#c75c00'
					label={renderCustomizedLabel}
					labelLine={false}
				>
					{data.data.map((entry, index) => (
						<Cell
							key={`cell-${index}`}
							fill={COLORS[index % COLORS.length]}
						/>
					))}
				</Pie>
				<Tooltip />
				<text
					x={500 / 2}
					y={5}
					fill='black'
					textAnchor='end'
					dominantBaseline='central'
				>
					<tspan fontSize='15'>72 hr Job-Posting Data</tspan>
				</text>
				<Legend
					layout='horizontal'
					verticalAlign='bottom'
					align='center'
				/>
			</PieChart>
		</ResponsiveContainer>
	);
}
