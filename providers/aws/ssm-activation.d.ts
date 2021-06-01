import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SsmActivationConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_activation.html#description SsmActivation#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_activation.html#expiration_date SsmActivation#expiration_date}.
     */
    readonly expirationDate?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_activation.html#iam_role SsmActivation#iam_role}.
     */
    readonly iamRole: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_activation.html#name SsmActivation#name}.
     */
    readonly name?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_activation.html#registration_limit SsmActivation#registration_limit}.
     */
    readonly registrationLimit?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_activation.html#tags SsmActivation#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_activation.html#tags_all SsmActivation#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ssm_activation.html aws_ssm_activation}.
 */
export declare class SsmActivation extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ssm_activation.html aws_ssm_activation} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: SsmActivationConfig);
    get activationCode(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _expirationDate?;
    get expirationDate(): string;
    set expirationDate(value: string);
    resetExpirationDate(): void;
    get expirationDateInput(): string | undefined;
    get expired(): boolean;
    private _iamRole;
    get iamRole(): string;
    set iamRole(value: string);
    get iamRoleInput(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    get registrationCount(): number;
    private _registrationLimit?;
    get registrationLimit(): number;
    set registrationLimit(value: number);
    resetRegistrationLimit(): void;
    get registrationLimitInput(): number | undefined;
    private _tags?;
    get tags(): {
        [key: string]: string;
    };
    set tags(value: {
        [key: string]: string;
    });
    resetTags(): void;
    get tagsInput(): {
        [key: string]: string;
    } | undefined;
    private _tagsAll?;
    get tagsAll(): {
        [key: string]: string;
    };
    set tagsAll(value: {
        [key: string]: string;
    });
    resetTagsAll(): void;
    get tagsAllInput(): {
        [key: string]: string;
    } | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
