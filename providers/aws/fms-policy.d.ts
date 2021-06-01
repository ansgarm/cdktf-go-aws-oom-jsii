import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface FmsPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy.html#delete_all_policy_resources FmsPolicy#delete_all_policy_resources}.
     */
    readonly deleteAllPolicyResources?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy.html#exclude_resource_tags FmsPolicy#exclude_resource_tags}.
     */
    readonly excludeResourceTags: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy.html#name FmsPolicy#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy.html#remediation_enabled FmsPolicy#remediation_enabled}.
     */
    readonly remediationEnabled?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy.html#resource_tags FmsPolicy#resource_tags}.
     */
    readonly resourceTags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy.html#resource_type FmsPolicy#resource_type}.
     */
    readonly resourceType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy.html#resource_type_list FmsPolicy#resource_type_list}.
     */
    readonly resourceTypeList?: string[];
    /**
     * exclude_map block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy.html#exclude_map FmsPolicy#exclude_map}
     */
    readonly excludeMap?: FmsPolicyExcludeMap[];
    /**
     * include_map block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy.html#include_map FmsPolicy#include_map}
     */
    readonly includeMap?: FmsPolicyIncludeMap[];
    /**
     * security_service_policy_data block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy.html#security_service_policy_data FmsPolicy#security_service_policy_data}
     */
    readonly securityServicePolicyData: FmsPolicySecurityServicePolicyData[];
}
export interface FmsPolicyExcludeMap {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy.html#account FmsPolicy#account}.
     */
    readonly account?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy.html#orgunit FmsPolicy#orgunit}.
     */
    readonly orgunit?: string[];
}
export interface FmsPolicyIncludeMap {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy.html#account FmsPolicy#account}.
     */
    readonly account?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy.html#orgunit FmsPolicy#orgunit}.
     */
    readonly orgunit?: string[];
}
export interface FmsPolicySecurityServicePolicyData {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy.html#managed_service_data FmsPolicy#managed_service_data}.
     */
    readonly managedServiceData?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy.html#type FmsPolicy#type}.
     */
    readonly type: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/fms_policy.html aws_fms_policy}.
 */
export declare class FmsPolicy extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/fms_policy.html aws_fms_policy} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: FmsPolicyConfig);
    get arn(): string;
    private _deleteAllPolicyResources?;
    get deleteAllPolicyResources(): boolean;
    set deleteAllPolicyResources(value: boolean);
    resetDeleteAllPolicyResources(): void;
    get deleteAllPolicyResourcesInput(): boolean | undefined;
    private _excludeResourceTags;
    get excludeResourceTags(): boolean;
    set excludeResourceTags(value: boolean);
    get excludeResourceTagsInput(): boolean;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get policyUpdateToken(): string;
    private _remediationEnabled?;
    get remediationEnabled(): boolean;
    set remediationEnabled(value: boolean);
    resetRemediationEnabled(): void;
    get remediationEnabledInput(): boolean | undefined;
    private _resourceTags?;
    get resourceTags(): {
        [key: string]: string;
    };
    set resourceTags(value: {
        [key: string]: string;
    });
    resetResourceTags(): void;
    get resourceTagsInput(): {
        [key: string]: string;
    } | undefined;
    private _resourceType?;
    get resourceType(): string;
    set resourceType(value: string);
    resetResourceType(): void;
    get resourceTypeInput(): string | undefined;
    private _resourceTypeList?;
    get resourceTypeList(): string[];
    set resourceTypeList(value: string[]);
    resetResourceTypeList(): void;
    get resourceTypeListInput(): string[] | undefined;
    private _excludeMap?;
    get excludeMap(): FmsPolicyExcludeMap[];
    set excludeMap(value: FmsPolicyExcludeMap[]);
    resetExcludeMap(): void;
    get excludeMapInput(): FmsPolicyExcludeMap[] | undefined;
    private _includeMap?;
    get includeMap(): FmsPolicyIncludeMap[];
    set includeMap(value: FmsPolicyIncludeMap[]);
    resetIncludeMap(): void;
    get includeMapInput(): FmsPolicyIncludeMap[] | undefined;
    private _securityServicePolicyData;
    get securityServicePolicyData(): FmsPolicySecurityServicePolicyData[];
    set securityServicePolicyData(value: FmsPolicySecurityServicePolicyData[]);
    get securityServicePolicyDataInput(): FmsPolicySecurityServicePolicyData[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
