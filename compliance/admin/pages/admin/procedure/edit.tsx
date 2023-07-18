import * as React from 'react'
import { EditScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { ProcedureForm } from '../../../components/forms/ProcedureForm'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Edit procedure
			</Title>
			<EditScope entity="Procedure(id=$id)" redirectOnSuccess="admin/procedure/detail(id: $entity.id)">
				<SlotSources.Back>
					<LinkButton to="admin/procedure/detail(id: $entity.id)" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Detail
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<PersistButton />
				</SlotSources.Actions>
				<ProcedureForm />
			</EditScope>
		</>
	)
}
