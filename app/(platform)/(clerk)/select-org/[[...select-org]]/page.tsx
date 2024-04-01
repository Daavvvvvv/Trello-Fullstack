import { OrganizationList } from "@clerk/nextjs";
import { Organization } from "@clerk/nextjs/server";

export default function CreateOrganizationPage() {
  return (
    <div>
        <OrganizationList
        hidePersonal
        afterSelectOrganizationUrl="/organization/:id"
        afterCreateOrganizationUrl="/organization/:id"
        />
    </div>
  );
}