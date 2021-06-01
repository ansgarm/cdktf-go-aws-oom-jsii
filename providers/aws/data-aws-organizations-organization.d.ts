import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsOrganizationsOrganizationConfig extends cdktf.TerraformMetaArguments {
}
export declare class DataAwsOrganizationsOrganizationAccounts extends cdktf.ComplexComputedList {
    get arn(): string;
    get email(): string;
    get id(): string;
    get name(): string;
    get status(): string;
}
export declare class DataAwsOrganizationsOrganizationNonMasterAccounts extends cdktf.ComplexComputedList {
    get arn(): string;
    get email(): string;
    get id(): string;
    get name(): string;
    get status(): string;
}
export declare class DataAwsOrganizationsOrganizationRootsPolicyTypes extends cdktf.ComplexComputedList {
    get status(): string;
    get type(): string;
}
export declare class DataAwsOrganizationsOrganizationRoots extends cdktf.ComplexComputedList {
    get arn(): string;
    get id(): string;
    get name(): string;
    get policyTypes(): any;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/organizations_organization.html aws_organizations_organization}.
 */
export declare class DataAwsOrganizationsOrganization extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/organizations_organization.html aws_organizations_organization} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: DataAwsOrganizationsOrganizationConfig);
    accounts(index: string): DataAwsOrganizationsOrganizationAccounts;
    get arn(): string;
    get awsServiceAccessPrincipals(): string[];
    get enabledPolicyTypes(): string[];
    get featureSet(): string;
    get id(): string;
    get masterAccountArn(): string;
    get masterAccountEmail(): string;
    get masterAccountId(): string;
    nonMasterAccounts(index: string): DataAwsOrganizationsOrganizationNonMasterAccounts;
    roots(index: string): DataAwsOrganizationsOrganizationRoots;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
