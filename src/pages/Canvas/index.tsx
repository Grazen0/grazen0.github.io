import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Canvas.scss';

const defaultOptions = {
	color: '#000000',
	width: 3,
};

const Canvas: React.FC = () => {
	const canvasRef = React.useRef<HTMLCanvasElement>(null);
	const [prev, setPrev] = React.useState<{ x: number; y: number } | null>(null);
	const [options, setOptions] = React.useState(defaultOptions);
	const [mouseDown, setMouseDown] = React.useState(false);

	const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
		setOptions(prev => ({ ...prev, [target.name]: target.value }));
	};

	const fillCanvas = (color: string) => {
		const ctx = canvasRef.current?.getContext('2d');
		if (!ctx) return;
		const { width, height } = ctx.canvas;
		ctx.fillStyle = color;
		ctx.fillRect(0, 0, width, height);
	};

	const handleMove = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
		if (!mouseDown) return;

		const { left, top } = e.currentTarget.getBoundingClientRect();
		const x = e.clientX - left;
		const y = e.clientY - top;

		setPrev({ x, y });

		// Draw line
		const ctx = canvasRef.current?.getContext('2d');
		if (!ctx) return;

		const { width, color } = options;
		ctx.lineWidth = width;
		ctx.strokeStyle = color;

		ctx.lineCap = 'round';

		ctx.beginPath();
		ctx.moveTo(prev?.x || x, prev?.y || y);
		ctx.lineTo(x, y);
		ctx.stroke();
	};

	const onMouseDown = () => {
		setPrev(null);
		setMouseDown(true);
	};

	const onMouseUp = () => setMouseDown(false);

	React.useEffect(() => fillCanvas('white'), []);

	return (
		<div
			className="p-3 canvas-div"
			onMouseDown={onMouseDown}
			onMouseUp={onMouseUp}>
			<canvas
				ref={canvasRef}
				onMouseMove={handleMove}
				width={document.body.clientWidth * 0.5}
				height={500}></canvas>

			<Form id="canvasOptions">
				<Form.Group>
					<Form.Label htmlFor="color">Color:</Form.Label>
					<Form.Control type="color" name="color" onChange={handleChange} />
				</Form.Group>

				<Form.Group>
					<Form.Label htmlFor="width">Line width:</Form.Label>
					<Form.Control
						type="range"
						onChange={handleChange}
						min="1"
						max="30"
						name="width"
					/>
				</Form.Group>

				<Button
					className="my-3"
					onClick={() => fillCanvas('white')}
					variant="secondary">
					Clear canvas
				</Button>
				<br />
				<Button variant="info" onClick={() => fillCanvas(options.color)}>
					Fill canvas
				</Button>
			</Form>
		</div>
	);
};

export default Canvas;
