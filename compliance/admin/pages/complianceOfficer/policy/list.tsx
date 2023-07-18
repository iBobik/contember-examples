import * as React from 'react'
import { DataGridScope, DateCell, GenericCell, LinkButton, TextCell } from '@contember/admin'
import { Directive } from '../../../components/Directives'
import { SlotSources, Title } from '../../../components/Slots'

export default () => {
	return (
		<>
			<Title>
				Policies
			</Title>
			<SlotSources.Actions>
				<LinkButton to="complianceOfficer/policy/create">
					Create new policy
				</LinkButton>
			</SlotSources.Actions>
			<Directive name="content-max-width" content={null} />
			<DataGridScope entities="Policy" itemsPerPage={50}>
				<GenericCell shrunk canBeHidden={false}>
					<LinkButton to="complianceOfficer/policy/detail(id: $entity.id)">
						Open detail
					</LinkButton>
				</GenericCell>
				<TextCell key="title" field="title" header="Title" />
				<DateCell key="effectiveDate" field="effectiveDate" header="Effective date" />
				<DateCell key="reviewDate" field="reviewDate" header="Review date" />
			</DataGridScope>
		</>
	)
}
