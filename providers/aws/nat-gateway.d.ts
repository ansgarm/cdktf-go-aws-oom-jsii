import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface NatGatewayConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/nat_gateway.html#allocation_id NatGateway#allocation_id}.
     */
    readonly allocationId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/nat_gateway.html#subnet_id NatGateway#subnet_id}.
     */
    readonly subnetId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/nat_gateway.html#tags NatGateway#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/nat_gateway.html#tags_all NatGateway#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/nat_gateway.html aws_nat_gateway}.
 */
export declare class NatGateway extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/nat_gateway.html aws_nat_gateway} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: NatGatewayConfig);
    private _allocationId;
    get allocationId(): string;
    set allocationId(value: string);
    get allocationIdInput(): string;
    get id(): string;
    get networkInterfaceId(): string;
    get privateIp(): string;
    get publicIp(): string;
    private _subnetId;
    get subnetId(): string;
    set subnetId(value: string);
    get subnetIdInput(): string;
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
