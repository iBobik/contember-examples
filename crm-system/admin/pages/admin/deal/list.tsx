import * as React from 'react'
import { DataGridScope, DeleteEntityButton, EnumCell, GenericCell, HasOneSelectCell, LinkButton, NumberCell, TextCell } from '@contember/admin'
import { Directive } from '../../../components/Directives'
import { SlotSources, Title } from '../../../components/Slots'

export default () => {
	return (
		<>
			<Title>
				Deals
			</Title>
			<SlotSources.Actions>
				<LinkButton to="admin/deal/create">
					Create new deal
				</LinkButton>
			</SlotSources.Actions>
			<Directive name="content-max-width" content={null} />
			<DataGridScope entities="Deal" itemsPerPage={50}>
				<GenericCell shrunk canBeHidden={false}>
					<LinkButton to="admin/deal/detail(id: $entity.id)">
						Open detail
					</LinkButton>
				</GenericCell>
				<TextCell key="title" field="title" header="Title" />
				<NumberCell key="value" field="value" header="Value" />
				<HasOneSelectCell field="customer" header="customer" options="Customer.name" />
				<HasOneSelectCell field="salesRepresentative" header="salesRepresentative" options="User.name" />
				<EnumCell options={{ open: 'open', won: 'won', lost: 'lost' }} key="status" field="status" header="Status" />
				<GenericCell shrunk canBeHidden={false}>
					<DeleteEntityButton immediatePersist />
				</GenericCell>
			</DataGridScope>
		</>
	)
}
