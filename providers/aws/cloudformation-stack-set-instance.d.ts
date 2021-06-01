import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CloudformationStackSetInstanceConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance.html#account_id CloudformationStackSetInstance#account_id}.
     */
    readonly accountId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance.html#parameter_overrides CloudformationStackSetInstance#parameter_overrides}.
     */
    readonly parameterOverrides?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance.html#region CloudformationStackSetInstance#region}.
     */
    readonly region?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance.html#retain_stack CloudformationStackSetInstance#retain_stack}.
     */
    readonly retainStack?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance.html#stack_set_name CloudformationStackSetInstance#stack_set_name}.
     */
    readonly stackSetName: string;
    /**
     * timeouts block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance.html#timeouts CloudformationStackSetInstance#timeouts}
     */
    readonly timeouts?: CloudformationStackSetInstanceTimeouts;
}
export interface CloudformationStackSetInstanceTimeouts {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance.html#create CloudformationStackSetInstance#create}.
     */
    readonly create?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance.html#delete CloudformationStackSetInstance#delete}.
     */
    readonly delete?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance.html#update CloudformationStackSetInstance#update}.
     */
    readonly update?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance.html aws_cloudformation_stack_set_instance}.
 */
export declare class CloudformationStackSetInstance extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance.html aws_cloudformation_stack_set_instance} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: CloudformationStackSetInstanceConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string | undefined;
    get id(): string;
    private _parameterOverrides?;
    get parameterOverrides(): {
        [key: string]: string;
    };
    set parameterOverrides(value: {
        [key: string]: string;
    });
    resetParameterOverrides(): void;
    get parameterOverridesInput(): {
        [key: string]: string;
    } | undefined;
    private _region?;
    get region(): string;
    set region(value: string);
    resetRegion(): void;
    get regionInput(): string | undefined;
    private _retainStack?;
    get retainStack(): boolean;
    set retainStack(value: boolean);
    resetRetainStack(): void;
    get retainStackInput(): boolean | undefined;
    get stackId(): string;
    private _stackSetName;
    get stackSetName(): string;
    set stackSetName(value: string);
    get stackSetNameInput(): string;
    private _timeouts?;
    get timeouts(): CloudformationStackSetInstanceTimeouts;
    set timeouts(value: CloudformationStackSetInstanceTimeouts);
    resetTimeouts(): void;
    get timeoutsInput(): CloudformationStackSetInstanceTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
