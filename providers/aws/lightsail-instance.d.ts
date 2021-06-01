import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LightsailInstanceConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance.html#availability_zone LightsailInstance#availability_zone}.
     */
    readonly availabilityZone: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance.html#blueprint_id LightsailInstance#blueprint_id}.
     */
    readonly blueprintId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance.html#bundle_id LightsailInstance#bundle_id}.
     */
    readonly bundleId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance.html#key_pair_name LightsailInstance#key_pair_name}.
     */
    readonly keyPairName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance.html#name LightsailInstance#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance.html#tags LightsailInstance#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance.html#tags_all LightsailInstance#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance.html#user_data LightsailInstance#user_data}.
     */
    readonly userData?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance.html aws_lightsail_instance}.
 */
export declare class LightsailInstance extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance.html aws_lightsail_instance} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: LightsailInstanceConfig);
    get arn(): string;
    private _availabilityZone;
    get availabilityZone(): string;
    set availabilityZone(value: string);
    get availabilityZoneInput(): string;
    private _blueprintId;
    get blueprintId(): string;
    set blueprintId(value: string);
    get blueprintIdInput(): string;
    private _bundleId;
    get bundleId(): string;
    set bundleId(value: string);
    get bundleIdInput(): string;
    get cpuCount(): number;
    get createdAt(): string;
    get id(): string;
    get ipv6Address(): string;
    get ipv6Addresses(): string[];
    get isStaticIp(): boolean;
    private _keyPairName?;
    get keyPairName(): string;
    set keyPairName(value: string);
    resetKeyPairName(): void;
    get keyPairNameInput(): string | undefined;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get privateIpAddress(): string;
    get publicIpAddress(): string;
    get ramSize(): number;
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
    private _userData?;
    get userData(): string;
    set userData(value: string);
    resetUserData(): void;
    get userDataInput(): string | undefined;
    get username(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
