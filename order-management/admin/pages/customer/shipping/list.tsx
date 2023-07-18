import * as React from 'react'
import { DataGridScope, DateCell, EnumCell, GenericCell, LinkButton, TextCell } from '@contember/admin'
import { Directive } from '../../../components/Directives'
import { Title } from '../../../components/Slots'

export default () => {
	return (
		<>
			<Title>
				Shippings
			</Title>
			<Directive name="content-max-width" content={null} />
			<DataGridScope entities="Shipping" itemsPerPage={50}>
				<GenericCell shrunk canBeHidden={false}>
					<LinkButton to="customer/shipping/detail(id: $entity.id)">
						Open detail
					</LinkButton>
				</GenericCell>
				<TextCell key="trackingNumber" field="trackingNumber" header="Tracking number" />
				<TextCell key="carrier" field="carrier" header="Carrier" />
				<DateCell key="shippingDate" field="shippingDate" header="Shipping date" />
				<DateCell key="estimatedDeliveryDate" field="estimatedDeliveryDate" header="Estimated delivery date" />
				<EnumCell
					options={{ pending: 'pending', shipped: 'shipped', delivered: 'delivered' }}
					key="status"
					field="status"
					header="Status"
				/>
			</DataGridScope>
		</>
	)
}
