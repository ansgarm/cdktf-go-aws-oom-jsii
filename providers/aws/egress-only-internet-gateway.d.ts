import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EgressOnlyInternetGatewayConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/egress_only_internet_gateway.html#tags EgressOnlyInternetGateway#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/egress_only_internet_gateway.html#tags_all EgressOnlyInternetGateway#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/egress_only_internet_gateway.html#vpc_id EgressOnlyInternetGateway#vpc_id}.
     */
    readonly vpcId: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/egress_only_internet_gateway.html aws_egress_only_internet_gateway}.
 */
export declare class EgressOnlyInternetGateway extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/egress_only_internet_gateway.html aws_egress_only_internet_gateway} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: EgressOnlyInternetGatewayConfig);
    get id(): string;
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
    private _vpcId;
    get vpcId(): string;
    set vpcId(value: string);
    get vpcIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
