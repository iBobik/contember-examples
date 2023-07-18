import { Box, DataGrid, DetailScope, DisplayTextField, GenericCell, HasOneSelectCell, LinkButton, NumberCell, Stack } from '@contember/admin'
import { ArrowLeftIcon } from 'lucide-react'
import { DeleteEntityButton } from '../../../components/DeleteEntityButton'
import { SlotSources, Title } from '../../../components/Slots'

export default () => {
	return (
		<>
			<Title>
				Order detail
			</Title>
			<DetailScope entity="Order(id=$id)">
				<SlotSources.Back>
					<LinkButton to="admin/order/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Orders
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<LinkButton to="admin/order/edit(id: $entity.id)">
						Edit order
					</LinkButton>
				</SlotSources.Actions>
				<Stack direction="vertical" gap="xlarge">
					<Box className="box">
						<Stack direction="vertical">
							<div className="box-item">
								<DisplayTextField field="orderDate" label="Order date" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="customer.name" label="User" labelPosition="labelLeft" />
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
						<DataGrid entities="OrderProduct[order.id=$id]">
							<GenericCell shrunk canBeHidden={false}>
								<LinkButton to="admin/orderProduct/detail(id: $entity.id)">
									Open detail
								</LinkButton>
							</GenericCell>
							<NumberCell key="quantity" field="quantity" header="Quantity" />
							<HasOneSelectCell field="product" header="product" options="Product.name" />
							<GenericCell shrunk canBeHidden={false}>
								<DeleteEntityButton immediatePersist />
							</GenericCell>
						</DataGrid>
					</Box>
					<div>
						<DeleteEntityButton flow="default" intent="danger" distinction="outlined" immediatePersist redirectOnSuccess="admin/order/list">
							Delete order
						</DeleteEntityButton>
					</div>
				</Stack>
			</DetailScope>
		</>
	)
}
