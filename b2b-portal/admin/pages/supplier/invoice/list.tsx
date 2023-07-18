import * as React from 'react'
import { DataGridScope, DateCell, GenericCell, HasOneSelectCell, LinkButton, NumberCell, TextCell } from '@contember/admin'
import { Directive } from '../../../components/Directives'
import { Title } from '../../../components/Slots'

export default () => {
	return (
		<>
			<Title>
				Invoices
			</Title>
			<Directive name="content-max-width" content={null} />
			<DataGridScope entities="Invoice" itemsPerPage={50}>
				<GenericCell shrunk canBeHidden={false}>
					<LinkButton to="supplier/invoice/detail(id: $entity.id)">
						Open detail
					</LinkButton>
				</GenericCell>
				<HasOneSelectCell field="client" header="client" options="User.name" />
				<HasOneSelectCell field="order" header="order" options="Order.id" />
				<DateCell key="invoiceDate" field="invoiceDate" header="Invoice date" />
				<DateCell key="dueDate" field="dueDate" header="Due date" />
				<NumberCell key="totalAmount" field="totalAmount" header="Total amount" />
				<TextCell key="paymentStatus" field="paymentStatus" header="Payment status" />
			</DataGridScope>
		</>
	)
}
