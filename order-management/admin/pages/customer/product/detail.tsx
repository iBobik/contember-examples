import * as React from 'react'
import { Box, DataGrid, DetailScope, DisplayTextField, GenericCell, HasOneSelectCell, LinkButton, NumberCell, Stack } from '@contember/admin'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Product detail
			</Title>
			<DetailScope entity="Product(id=$id)">
				<SlotSources.Back>
					<LinkButton to="customer/product/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Products
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<Stack direction="vertical" gap="xlarge">
					<Box className="box">
						<Stack direction="vertical">
							<div className="box-item">
								<DisplayTextField field="name" label="Name" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="description" label="Description" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="price" label="Price" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="availableQuantity" label="Available quantity" labelPosition="labelLeft" />
							</div>
						</Stack>
					</Box>
					<Box className="box">
						<div className="box-header">
							<Stack direction="horizontal" justify="space-between">
								<h2 className="text-lg font-bold">
									Order products
								</h2>
							</Stack>
						</div>
						<DataGrid entities="OrderProduct[product.id=$id]">
							<GenericCell shrunk canBeHidden={false}>
								<LinkButton to="customer/orderProduct/detail(id: $entity.id)">
									Open detail
								</LinkButton>
							</GenericCell>
							<NumberCell key="quantity" field="quantity" header="Quantity" />
							<HasOneSelectCell field="order" header="order" options="Order.id" />
						</DataGrid>
					</Box>
				</Stack>
			</DetailScope>
		</>
	)
}
