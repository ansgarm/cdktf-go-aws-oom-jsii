import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface OrganizationsOrganizationConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_organization.html#aws_service_access_principals OrganizationsOrganization#aws_service_access_principals}.
     */
    readonly awsServiceAccessPrincipals?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_organization.html#enabled_policy_types OrganizationsOrganization#enabled_policy_types}.
     */
    readonly enabledPolicyTypes?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_organization.html#feature_set OrganizationsOrganization#feature_set}.
     */
    readonly featureSet?: string;
}
export declare class OrganizationsOrganizationAccounts extends cdktf.ComplexComputedList {
    get arn(): string;
    get email(): string;
    get id(): string;
    get name(): string;
    get status(): string;
}
export declare class OrganizationsOrganizationNonMasterAccounts extends cdktf.ComplexComputedList {
    get arn(): string;
    get email(): string;
    get id(): string;
    get name(): string;
    get status(): string;
}
export declare class OrganizationsOrganizationRootsPolicyTypes extends cdktf.ComplexComputedList {
    get status(): string;
    get type(): string;
}
export declare class OrganizationsOrganizationRoots extends cdktf.ComplexComputedList {
    get arn(): string;
    get id(): string;
    get name(): string;
    get policyTypes(): any;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/organizations_organization.html aws_organizations_organization}.
 */
export declare class OrganizationsOrganization extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/organizations_organization.html aws_organizations_organization} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: OrganizationsOrganizationConfig);
    accounts(index: string): OrganizationsOrganizationAccounts;
    get arn(): string;
    private _awsServiceAccessPrincipals?;
    get awsServiceAccessPrincipals(): string[];
    set awsServiceAccessPrincipals(value: string[]);
    resetAwsServiceAccessPrincipals(): void;
    get awsServiceAccessPrincipalsInput(): string[] | undefined;
    private _enabledPolicyTypes?;
    get enabledPolicyTypes(): string[];
    set enabledPolicyTypes(value: string[]);
    resetEnabledPolicyTypes(): void;
    get enabledPolicyTypesInput(): string[] | undefined;
    private _featureSet?;
    get featureSet(): string;
    set featureSet(value: string);
    resetFeatureSet(): void;
    get featureSetInput(): string | undefined;
    get id(): string;
    get masterAccountArn(): string;
    get masterAccountEmail(): string;
    get masterAccountId(): string;
    nonMasterAccounts(index: string): OrganizationsOrganizationNonMasterAccounts;
    roots(index: string): OrganizationsOrganizationRoots;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
