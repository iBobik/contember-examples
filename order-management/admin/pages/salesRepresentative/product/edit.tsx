import * as React from 'react'
import { EditScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { ProductForm } from '../../../components/forms/ProductForm'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Edit product
			</Title>
			<EditScope entity="Product(id=$id)" redirectOnSuccess="salesRepresentative/product/detail(id: $entity.id)">
				<SlotSources.Back>
					<LinkButton
						to="salesRepresentative/product/detail(id: $entity.id)"
						size="small"
						className="mr-2"
						distinction="outlined"
					>
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Detail
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<PersistButton />
				</SlotSources.Actions>
				<ProductForm />
			</EditScope>
		</>
	)
}
